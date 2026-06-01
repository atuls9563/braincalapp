import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { Trick } from 'src/app/models/trick.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-trick',
  templateUrl: './trick.page.html',
  styleUrls: ['./trick.page.scss'],
  providers: [
    UserService,
    PostService
  ]
})
export class TrickPage implements OnInit {
  trick: Trick;
  userFavorites: any[] = [];
  playForm: FormGroup;
  result: any = null;

  constructor(postService: PostService, fb: FormBuilder
    , private activatedRoute: ActivatedRoute
    , private sanitizer: DomSanitizer
    , private userService: UserService
    , private alertCtrl: AlertController
    , public modalController: ModalController
    , private router: Router
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.trick = this.router.getCurrentNavigation().extras.state.trick;
    }
    let loadFromServer = this.activatedRoute.snapshot.params['loadFromServer'];
    if (loadFromServer) {
      postService.getPost(this.trick.id).subscribe(trick => {
        this.trick = trick;
      });
    }

    this.playForm = fb.group({
      firstNumber: ['', Validators.compose([Validators.required])],
      secondNumber: ['', Validators.required],
    });
  }

  getVideoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.trick.video + "?ecver=1");
  }

  ngOnInit() {
    this.userService.getUser().then(user => {
      this.userFavorites = user.favorites.toString().split(',').map(Number);
    });
  }

  addFavorite(id: number) {
    this.userFavorites.push(id);
    this.updateFavorites();
  }

  async showAlert(msg: string, title: string = "Error") {
    const alert = await this.alertCtrl.create({
      header: title,
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
        // this.navCtrl.push(LoginPage);
        this.userService.logout();
      }
      else
        this.showAlert(errorResponse.error);
    } catch (error) {
      this.showAlert(AppConstants.JSON_ERROR);
    }
  }

  updateFavorites() {
    this.userService.getAuthCookie().then(val => {
      this.userService.saveFavorites(this.userFavorites, val).subscribe((data: any) => {
        if (data.hasOwnProperty('user')) {
          this.userService.saveUser(data.user);
        }
      }, err => {
        this.checkForResponseError(err);
      });
    })
  }

  removeFavorite(id: number) {
    let index = this.userFavorites.indexOf(id);
    if (index >= 0) {
      this.userFavorites.splice(index, 1);
      this.updateFavorites();
    }
  }

  calculate(valid) {
    if (!valid)
      return;
    let firstNumber = parseInt(this.playForm.controls['firstNumber'].value);
    let secondNumber = parseInt(this.playForm.controls['secondNumber'].value);
    if (firstNumber === NaN || secondNumber === NaN) {
      this.result = 'Invalid Input';
      return;
    }
    this.result = eval(firstNumber + this.trick.expression + secondNumber);
  }


  showCover(coverImage) {
    // const imageViewer = this.imageViewerCtrl.create(coverImage);
    // imageViewer.present();
    this.openViewer(coverImage);
  }

  async openViewer(coverImage) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        // src: "./assets/img/demo.jpg"
        src: coverImage
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

}
