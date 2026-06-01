import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-lang-list',
  templateUrl: './lang-list.page.html',
  styleUrls: ['./lang-list.page.scss'],
  providers: [
    PostService,
    UserService
  ]
})
export class LangListPage implements OnInit {
  user: User;
  posts: Post[] = [];
  searchKeyword: string;
  requestInProgress: boolean = false;
  suggestions: Post[] = [];
  userFavorites: any[] = [];
  postType: string;
  heading: string;

  constructor(private userService: UserService
    , private service: PostService
    , private alertCtrl: AlertController
    , private router: Router) {

    if (this.router.getCurrentNavigation().extras.state) {
      this.postType = this.router.getCurrentNavigation().extras.state.type;
      this.heading = this.router.getCurrentNavigation().extras.state.heading;
    }
  }

  ngOnInit() {
    this.userService.getUser().then(user => {
      if (user && user.favorites)
        this.userFavorites = user.favorites.toString().split(',').map(Number);
    });
    this.requestInProgress = true;
    // this.service.getPosts(1,this.postType).finally(()=>
    // this.requestInProgress=false).subscribe((posts:Post[])=> 
    // this.posts= posts);

    this.service.getPosts(1, this.postType).pipe(finalize(() => this.requestInProgress = false))
      .subscribe((posts: Post[]) => this.posts = posts);

  }

  doInfinite(infiniteScroll) {
    let page: number = Math.ceil(this.posts.length / 5) + 1;
    if (page < 3) {
      this.service.getPosts(page, this.postType).subscribe((posts: Post[]) => {
        this.posts = this.posts.concat(posts);
        infiniteScroll.target.complete()
      },
        err => {
          infiniteScroll.target.complete();
          this.checkForResponseError(err);
        }
      );
    }
    else {
      infiniteScroll.target.complete();
    }
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
      this.showAlert(AppConstants.JSON_ERROR);
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

  openDetailPage(lang: Post) {
    // this.navCtrl.push(LangPage,{'post': lang});
    // this.navCtrl.push(TrickPage,{'trick': trick});

    let navigationExtras: NavigationExtras = {
      state: {
        post: lang
      }
    };
    this.router.navigate(['lang'], navigationExtras);
  }


  searchPost() {
    if (this.searchKeyword) {
      if (this.searchKeyword.length < 3) {
        this.clearSearch();
        return false;
      }
    }

    this.service.searchPosts(this.searchKeyword, this.postType).subscribe((posts: Post[]) => {
      this.suggestions = posts;
    }, err => this.checkForResponseError(err))
  }

  onInput(event: any) {
    this.searchPost();
  }

  clearSearch() {
    this.suggestions = [];
  }

  addFavorite(id: number) {
    this.userFavorites.push(id);
    this.updateFavorites();

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

}
