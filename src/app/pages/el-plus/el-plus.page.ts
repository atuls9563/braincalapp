import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { QA } from 'src/app/models/qa.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/app.constants';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-el-plus',
  templateUrl: './el-plus.page.html',
  styleUrls: ['./el-plus.page.scss'],
  providers: [
    PostService,
    UserService
  ]
})

export class ElPlusPage implements OnInit {
  post: QA;
  userFavorites: any[] = [];
  result: any = null;
  searchKeyword: string;
  showAnswer: boolean = false;

  constructor(private activatedRoute: ActivatedRoute
    , private router: Router
    , postService: PostService
    , private userService: UserService
    , private alertCtrl: AlertController
    , public modalController: ModalController
  ) {
    // this.post= this.navParams.get('post');
    if (this.router.getCurrentNavigation().extras.state) {
      this.post = this.router.getCurrentNavigation().extras.state.post;
    }

    // let loadFromServer= this.navParams.get('loadFromServer');
    let loadFromServer = this.activatedRoute.snapshot.params['loadFromServer'];

    if (loadFromServer) {
      postService.getPost(this.post.id, '11_plus').subscribe(post => {
        this.post = post;
      });
    }
  }

  ngOnInit() {
    this.userService.getUser().then(user => {
      this.userFavorites = user.favorites.toString().split(',').map(Number);
    });
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

  getAnswer() {
    this.showAnswer = true;
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

  addFavorite(id: number) {
    this.userFavorites.push(id);
    this.updateFavorites();

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
