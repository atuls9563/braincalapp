import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { QA } from 'src/app/models/qa.model';
import { User } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { finalize } from 'rxjs/operators';
import { AppConstants } from 'src/app/shared/app.constants';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-el-plus-list',
  templateUrl: './el-plus-list.page.html',
  styleUrls: ['./el-plus-list.page.scss'],
  providers: [
    PostService,
    UserService
  ]
})
export class ElPlusListPage implements OnInit {

  user: User;
  posts: QA[] = [];
  searchKeyword: string;
  requestInProgress: boolean = false;
  suggestions: QA[] = [];
  userFavorites: any[] = [];
  postType: string = '11_plus';
  taxonomy: string;
  taxonomyValue: number;
  heading: string;

  constructor(private router: Router
    , private userService: UserService
    , private service: PostService
    , private alertCtrl: AlertController
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.taxonomy = this.router.getCurrentNavigation().extras.state.type;
      this.taxonomyValue = this.router.getCurrentNavigation().extras.state.typeValue;
      this.heading = this.router.getCurrentNavigation().extras.state.heading;
    }
  }

  ngOnInit() {
    this.userService.getUser().then(user => {
      if (user && user.favorites)
        this.userFavorites = user.favorites.toString().split(',').map(Number);
    });
    this.requestInProgress = true;
    // this.service.getPostsByTaxonomy(1,this.postType,this.taxonomy,this.taxonomyValue).finally(()=>this.requestInProgress=false)
    //                              .subscribe((posts:QA[])=> this.posts= posts);

    this.service.getPostsByTaxonomy(1, this.postType, this.taxonomy, this.taxonomyValue).pipe(finalize(() => this.requestInProgress = false))
      .subscribe((posts: QA[]) => this.posts = posts);
  }

  doInfinite(infiniteScroll) {
    let page: number = Math.ceil(this.posts.length / 5) + 1;
    if (page < 5) {
      this.service.getPostsByTaxonomy(page, this.postType, this.taxonomy, this.taxonomyValue).subscribe((gks: QA[]) => {
        this.posts = this.posts.concat(gks);
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

  openDetailPage(qa: QA) {
    // this.navCtrl.push(ElPlusPage,{'post': qa});

    let navigationExtras: NavigationExtras = {
      state: {
        post: qa
      }
    };
    this.router.navigate(['el-plus'], navigationExtras);
  }

  searchPost() {
    if (this.searchKeyword) {
      if (this.searchKeyword.length < 3) {
        this.clearSearch();
        return false;
      }

      this.service.searchPosts(this.searchKeyword, '11_plus').subscribe((posts: QA[]) => {
        this.suggestions = posts;
      }, err => this.checkForResponseError(err))
    }
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
