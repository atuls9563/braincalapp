import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Trick } from 'src/app/models/trick.model';
import { User } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.page.html',
  styleUrls: ['./maths.page.scss'],
  providers: [
    PostService,
    UserService
  ]
})
export class MathsPage implements OnInit {
  user: User;
  favUser: User;
  tricks: Trick[] = [];
  trickSuggestions: Trick[] = [];
  searchKeyword: string;
  userFavorites: any[] = [];
  requestInProgress: boolean = false;

  constructor(private userService: UserService
    , private service: PostService
    , private alertCtrl: AlertController
    , private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUser().then((user) => {
      if (user && user.favorites)
        this.userFavorites = user.favorites.toString().split(',').map(Number);
    });
    this.requestInProgress = true;
    this.service.getPosts()
      .pipe(finalize(() => this.requestInProgress = false))
      .subscribe(tricks => this.tricks = tricks, error => this.checkForResponseError(error));

  }

  validateId(trickid) {
    return this.userFavorites.find(id => id === trickid);
  }

  async showAlert(msg: string, title: string = "Error") {

    console.log("Coming here --- ", msg, title);
    alert("coming here");
    const alertMessage = await this.alertCtrl.create({
      header: title,
      message: msg,
      buttons: ['Dismiss']
    });
    await alertMessage.present();
  }

  checkForResponseError(err: any) {
    try {
      let errorResponse = JSON.parse(err._body);
      if (errorResponse.code == "rest_post_invalid_page_number")
        return;
      if (errorResponse.error == "session_expired") {
        this.showAlert("Seems your session is expired. Please login again.");
        this.userService.logout();
      }
      else
        this.showAlert(errorResponse.error);
    } catch (error) {
      this.showAlert(AppConstants.JSON_ERROR);
    }
  }

  openDetailPage(trick: Trick) {
    this.router.navigate(['trick'], { state: { trick } });
  }

  searchTrick() {
    if (this.searchKeyword == null || this.searchKeyword == '') return;
    if (this.searchKeyword.length < 3) {
      this.clearSearch();
      return false;
    }
    this.service.searchPosts(this.searchKeyword).subscribe(tricks => {
      this.trickSuggestions = tricks;
    }, err => this.checkForResponseError(err))
  }

  onInput(event: any) {
    this.searchTrick();
  }

  clearSearch() {
    this.trickSuggestions = [];
  }

  openTrickDetail(trick: Trick) {
    this.router.navigate(['trick'], { state: { trick } });
  }

  doInfinite(infiniteScroll) {
    let page: number = Math.ceil(this.tricks.length / 5) + 1;
    if (page < 5) {
      this.service.getPosts(page).subscribe(tricks => {
        this.tricks = this.tricks.concat(tricks);
        infiniteScroll.target.complete();
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

  addFavorite(id: number) {
    this.userFavorites.push(id);
    this.updateFavorites();
  }

  updateFavorites() {
    this.userService.getAuthCookie().then(val => {
      this.userService.saveFavorites(this.userFavorites, val).subscribe((data: any) => {
        if (data.hasOwnProperty('user')) {
          this.favUser = data.user;
          this.userService.saveUser(this.favUser);
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
