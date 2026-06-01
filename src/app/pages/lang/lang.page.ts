import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.page.html',
  styleUrls: ['./lang.page.scss'],
  providers: [
    PostService,
    UserService
  ]
})
export class LangPage implements OnInit {
  lang: Post;
  userFavorites: any[] = [];
  result: any = null;
  searchKeyword: string;
  showAnswer: boolean = false;

  constructor(postService: PostService
    , private activatedRoute: ActivatedRoute
    , private router: Router
    , private userService: UserService
    , private alertCtrl: AlertController
  ) {

    // this.lang= this.navParams.get('post');
    // let loadFromServer= this.navParams.get('loadFromServer');

    let loadFromServer = this.activatedRoute.snapshot.params['loadFromServer'];

    if (this.router.getCurrentNavigation().extras.state) {
      this.lang = this.router.getCurrentNavigation().extras.state.post;
    }

    if (loadFromServer) {
      postService.getPost(this.lang.id, 'lang').subscribe(lang => {
        this.lang = lang;
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

}
