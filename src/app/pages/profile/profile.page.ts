import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController , MenuController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/app.constants';
import { ValidateEmail } from 'src/app/shared/validators/email.validator';
import { Storage } from '@ionic/storage'; // This line added manually.
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [UserService]
})
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  requestInProgress: boolean= false;
  countries: any[]= [];

  // constructor(private alertCtrl: AlertController,private storage: Storage ,public navCtrl: NavController, public navParams: NavParams,private userService: UserService,private fb: FormBuilder,public viewCtrl: ViewController,public appCtrl: App) {
  // }
  // constructor( public navParams: NavParams,public viewCtrl: ViewController,public appCtrl: App) {
  // }
   constructor(private fb:FormBuilder
    ,private userService:UserService
    ,private alertCtrl: AlertController
    ,private storage: Storage
    ,private router:Router
    ,private activatedRoute: ActivatedRoute
    , private menuCtrl: MenuController,
    ) { 
    }

  ngOnInit() {
    this.countries = AppConstants.countries;
    this.profileForm= this.fb.group({
      firstname: [''],
      lastname: [''],
      email: ['',Validators.compose([ValidateEmail])],
      mobile: [''],
     // country: ['',Validators.required]
    });

    this.userService.getUser().then(user=>{
        this.initializeData(user)
    });
  }

  initializeData(user: User){
    // console.log(user);
    this.profileForm.controls.firstname.setValue(user.firstname);
    this.profileForm.controls.lastname.setValue(user.lastname);
    this.profileForm.controls.email.setValue(user.email);
    this.profileForm.controls.mobile.setValue(user.mobile);
    //this.profileForm.controls.country.setValue(user.countryCode);
    this.menuCtrl.enable(true);
  }

  async showAlert(msg: string,title:string="Error",error : boolean= false) {
    const alert = await this.alertCtrl.create({
     header: title,
     message: msg,
     buttons: [
                {
                  text: 'Dismiss',
                  role: 'dismiss',
                  handler: () => {
                    if(!error){
                      // this.navCtrl.setRoot(HomePage);
                      this.router.navigate(['home']);
                    }
                  }
                }
              ]
    });
    await alert.present();
  }

  checkForResponseError(err: any){
    try{
      // let errorResponse= JSON.parse(err._body);
      let errorResponse= err;
      if(errorResponse.error.error=="session_expired"){
          this.showAlert("Seems your session is expired. Please login again.");
          // this.navCtrl.push(LoginPage)
          this.router.navigate(['login']);
          this.userService.logout();
      }
      else
      this.showAlert(errorResponse.error.error,'Error',true);   
    }  catch(error){
      this.showAlert(AppConstants.JSON_ERROR,'Error',true); 
    }
  }

  showRequestInProgress(status: boolean){
    this.requestInProgress= status;
  }

  update(valid){
    if(!valid)
        return;
    this.showRequestInProgress(true);
    this.storage.get("authCookie").then(val=>{
      this.userService.updateUser(this.profileForm.value,val).subscribe((data)=>{
        this.showRequestInProgress(false);
        if(data.status=="ok"){
          this.userService.saveUser(data.user);
          this.showAlert("Profile updated successfully","Profile Update"); 
        }
      },err=>{this.showRequestInProgress(false); this.checkForResponseError(err); })
    })    
     
  }

}
