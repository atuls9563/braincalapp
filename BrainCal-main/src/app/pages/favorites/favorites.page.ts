import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  providers: [
    PostService,
    UserService
  ]
})
export class FavoritesPage implements OnInit {
  posts: any[] = [];
  postSuggestions: any[] = [];
  searchKeyword: string;
  userFavorites: any[] = [];
  requestInProgress: boolean = false;

  constructor(private userService: UserService
    , private service: PostService
    , private alertCtrl: AlertController
    , private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUser().then(user => {
      let ids = user.favorites.toString().split(',');
      this.userFavorites = ids.map(Number);
      this.showRequestInProgress(true);
      this.service.getPostsByIds(user.favorites).subscribe((posts: any) => {
        this.showRequestInProgress(false);
        this.posts = posts;
      }, err => {
        this.showRequestInProgress(false);
        this.checkForResponseError(err);
      });
    });
  }

  showRequestInProgress(status: boolean) {
    this.requestInProgress = status;
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
        // this.navCtrl.push(LoginPage)

        // let navigationExtras: NavigationExtras = {
        //   state: {
        //     post: ""
        //   }
        // };
        this.router.navigate(['login']);
      }
      else
        this.showAlert(errorResponse.error);
    } catch (error) {
      this.showAlert(AppConstants.JSON_ERROR);
    }
  }

  openDetailPage(post: any) {
    if (post.type == 'tricks') {
      // this.navCtrl.push(TrickPage,{'trick': post,'loadFromServer': true});

      let navigationExtras: NavigationExtras = {
        state: {
          trick: post,
          loadFromServer: true
        }
      };
      this.router.navigate(['trick'], navigationExtras);
    }
    else if (post.type == 'general_knowledge') {
      // this.navCtrl.push(GKPage,{'gk': post,'loadFromServer': true});

      let navigationExtras: NavigationExtras = {
        state: {
          gk: post,
          loadFromServer: true
        }
      };
      this.router.navigate(['gk'], navigationExtras);
    }
    else if (post.type == '11_plus') {
      // this.navCtrl.push(ElPlusPage,{'post': post,'loadFromServer': true});

      let navigationExtras: NavigationExtras = {
        state: {
          post: post,
          loadFromServer: true
        }
      };
      this.router.navigate(['el-plus'], navigationExtras);
    }
    else if (['spanish', 'english', 'french', 'hindi'].indexOf(post.type) >= 0) {
      // this.navCtrl.push(LangPage,{'post': post,'loadFromServer': true});

      let navigationExtras: NavigationExtras = {
        state: {
          post: post,
          loadFromServer: true
        }
      };
      this.router.navigate(['lang'], navigationExtras);
    }

  }

  searchTrick() {
    if (this.searchKeyword) {
      if (this.searchKeyword.length < 3)
        return false;
      this.service.searchPosts(this.searchKeyword).subscribe(posts => {
        this.postSuggestions = posts;
      }, err => this.checkForResponseError(err))
    }
  }

  onInput(event: any) {
    this.searchTrick();
  }

  doInfinite(infiniteScroll) {
    let page: number = Math.ceil(this.posts.length / 5) + 1;
    if (page < 5) {
      this.userService.getUser().then(user => {
        let ids = user.favorites.toString().split(',');
        this.service.getPostsByIds(ids, page).subscribe(tricks => {
          this.posts = this.posts.concat(tricks);
          infiniteScroll.target.complete()
        },
          err => {
            infiniteScroll.target.complete();
            this.checkForResponseError(err);
          }
        );
      });
    }
    else {
      infiniteScroll.target.complete();
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

  removeFavorite(id: number, itemIndex: number) {
    this.posts.splice(itemIndex, 1);
    let tmpIndex = this.userFavorites.indexOf(id);
    this.userFavorites.splice(tmpIndex, 1);
    this.updateFavorites();
  }

}
