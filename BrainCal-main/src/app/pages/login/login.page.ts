import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sim } from '@ionic-native/sim/ngx';
import { AlertController, MenuController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/app.constants';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@ionic-native/sign-in-with-apple/ngx';

@Component({
    selector: 'user-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    providers: [UserService, Sim, GooglePlus, Facebook]
})
export class LoginPage implements OnInit {

    public static JSON_ERROR = "Unable to connect to server. Please  try after some time.";
    loginForm: FormGroup;
    requestInProgress: boolean = false;
    countries: any[] = [];

    constructor(private activatedRoute: ActivatedRoute, private sim: Sim, public alertCtrl: AlertController, private userService: UserService, fb: FormBuilder
        , private router: Router
        , private googlePlus: GooglePlus
        , private facebook: Facebook
        , private menuCtrl: MenuController,
        private signInWithApple: SignInWithApple
    ) {

        this.menuCtrl.enable(false);


        this.loginForm = fb.group({
            mobile: ['', Validators.compose([Validators.maxLength(14), Validators.minLength(7), Validators.required])],
            country: ['', Validators.required]
        });

    }

    ngOnInit() {
        this.countries = AppConstants.countries;
        this.sim.getSimInfo().then(
            (info) => {
                let countryISOCode: string = info.countryCode;
                if (AppConstants.DIAL_CODES[countryISOCode.toUpperCase()]) {
                    let countryCode = countryISOCode.toUpperCase();
                    this.loginForm.controls.country.setValue(countryCode);
                }

            },
            (err) => console.log('Unable to get sim info: ', err)
        );
    }

    loginWithGoogle() {
        this.requestInProgress = true;
        this.googlePlus.login({
            'webClientId': '355295706725-jju0h51dqmnabbddljlnvr9nkegki8c2.apps.googleusercontent.com',
            'offline': true
        }).then(res => {
            this.userService.registerUser(res.email, res.email, res.givenName).subscribe(response => {
                this.requestInProgress = false;
                this.socialAccountRegistered(response);
            });
        }, err => {
            this.requestInProgress = false;

            //this.showAlert(err);
        });
    }

    loginWithFb() {
        console.log('loginWithFb');
        this.facebook.getLoginStatus()
            .then((res: FacebookLoginResponse) => {
                if (res && res.status == "connected") {
                    this.fetchUserDataFromFB();
                }
                else if (res && (res.status == "not_authorized" || res.status == "unknown")) {
                    this.requestInProgress = true;
                    this.facebook.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => {
                        this.fetchUserDataFromFB();
                    })
                        .catch(e => {
                            this.requestInProgress = false;
                            this.showAlert('Unable to log into Facebook.');
                        });
                }
            })
            .catch(e => {
                this.requestInProgress = false;
                this.showAlert(e);
            });
    }

    fetchUserDataFromFB() {
        this.facebook.api('me?fields=id,name,email,first_name', []).then(profile => {
            this.userService.registerUser(profile['email'], profile['email'], profile['first_name']).subscribe(response => {
                this.requestInProgress = false;
                this.socialAccountRegistered(response);
            });
        }).catch(e => {
            this.requestInProgress = false;
            this.showAlert(e);
        });
    }

    public login(valid: boolean) {
        if (!valid)
            return false;
        this.showRequestInProgress(true);
        this.userService.doLogin(this.loginForm.value.mobile, this.loginForm.value.country).subscribe(data => {
            this.showRequestInProgress(false);
            if (data.otp_session)
                this.showOTPDialog(data.otp_session);
            if (data.error) {
                this.showError(data.error);
                return;
            }


        }, err => {
            this.showRequestInProgress(false);
            try {
                let errorResponse = JSON.parse(err._body);
                if (errorResponse.error)
                    this.showError(errorResponse.error);
            } catch (error) {
                this.checkForResponseError(err);
            }


        });
    }

    showRequestInProgress(status: boolean) {
        this.requestInProgress = status;
    }

    async showOTPDialog(otp_session: string) {
        const alert = await this.alertCtrl.create({
            header: 'One Time Password',
            inputs: [
                {
                    name: 'otp',
                    placeholder: 'OTP'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: data => {
                        if (!data.otp) return;
                        this.showRequestInProgress(true);
                        this.userService.verifyOTP(this.loginForm.value.mobile, this.loginForm.value.country, data.otp, otp_session).subscribe(data => {
                            this.showRequestInProgress(false);
                            if (data.error) {
                                // alert.setMessage(data.error);
                                alert.message = data.error;

                                return false;
                            }
                            if (data.hasOwnProperty('user') && data.hasOwnProperty('cookie')) {
                                let user: User = data.user;
                                this.userService.saveUser(user);
                                this.userService.saveAuthCookie(data.cookie);
                                alert.dismiss();

                                this.menuCtrl.enable(true);
                                if (!user.firstname || !user.email) {
                                    // this.navCtrl.setRoot(ProfilePage);
                                    // this.navCtrl.navigateRoot(ProfilePage);
                                    this.router.navigate(['profile']);
                                } else {
                                    // this.navCtrl.setRoot(HomePage);
                                    // this.navCtrl.navigateRoot(HomePage);
                                    this.router.navigate(['home']);
                                }
                            }
                            else {
                                alert.dismiss();
                                this.showError(LoginPage.JSON_ERROR);
                            }



                        }, err => {
                            let errorResponse = JSON.parse(err._body);
                            if (errorResponse.error) {
                                //  alert.setMessage(data.error);
                                alert.message = data.error;
                                return false;
                            }
                        });
                        return false;
                    }
                }
            ]
        });
        await alert.present();
    }


    async showError(msg: string) {
        const alert = await this.alertCtrl.create({
            header: 'Error',
            message: msg,
            buttons: ['Dismiss']
        });
        await alert.present();
    }

    checkForResponseError(err: any) {
        try {
            let errorResponse = JSON.parse(err._body);
            if (errorResponse.code == "rest_post_invalid_page_number")
                return;
            if (errorResponse.error == "session_expired") {
                this.showAlert("Seems your session is expired. Please login again.");
                //this.navCtrl.push(LoginPage);
                this.userService.logout();
            }
            else
                this.showAlert(errorResponse.error);
        } catch (error) {
            this.showAlert('Unable to connect to server. Please  try after some time or check your internet connection.');
        }
    }


    async showAlert(msg: string, title: string = "Error") {
        const alert = await this.alertCtrl.create({
            header: title,
            message: msg,
            buttons: ['Dismiss']
        });
        await alert.present();
    }

    go() {
        console.log(1);
        // this.router.navigate(['profile']);
        this.router.navigateByUrl('/profile');
    }

    socialAccountRegistered(response: any) {
        if (response.success) {
            let user: User = response.data;
            this.userService.saveUser(user);
            this.userService.saveAuthCookie(response.data.cookie);
            if (!user.firstname || !user.email) {
                // this.navCtrl.setRoot(ProfilePage);
                this.router.navigate(['profile']);
            } else {
                // this.navCtrl.setRoot(HomePage);
                this.router.navigate(['home']);
            }
        }
        else {
            this.showAlert(response.data.msg);
        }

    }

    appleAccountRegistered(response: any) {
        if (response.success) {
            let user: User = response.data;
            this.userService.saveUser(user);
            this.userService.saveAuthCookie(response.data.cookie);
            this.menuCtrl.enable(true);
            this.router.navigate(['home']);
        }
        else {
            this.showAlert(response.data.msg);
        }
    }

    openAppleSignIn() {
        this.signInWithApple.signin({
            requestedScopes: [
                ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
                ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
            ]
        })
            .then((res: AppleSignInResponse) => {
                // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
                if (res && res.identityToken) {
                    //alert('Send token to apple for verification: ' + JSON.stringify(res));
                    let email = res.email;
                    if (email == "") {
                        email = res.user + '@gmail.com';
                    }
                    this.userService.registerUser(email, email, res.fullName.givenName).subscribe(response => {
                        this.requestInProgress = false;
                        this.appleAccountRegistered(response);
                    });
                } else {
                    alert('Login failed. Please try later.');
                }
            })
            .catch((error: AppleSignInErrorResponse) => {
                alert(error.code + ' ' + error.localizedDescription);
                console.error(error);
            });
    }

}
