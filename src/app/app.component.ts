import { Component, OnInit } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { User } from './models/user.model';
import { Trick } from './models/trick.model';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  rootPage: any;
  user: User;
  pages: Array<{ title: string, component: any, icon: any, type }>;
  searchKeyword: string;
  trickSuggestions: Trick[] = [];

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home', type: 'home' },
    { title: 'Math Tricks', url: '/maths', icon: 'calculator', type: 'tricks' },
    { title: 'Languages', url: '/lang-cat', icon: 'calculator', type: 'lang' },
    { title: 'General Knowledge', url: '/quiz', icon: 'book', type: 'gk' },
    { title: '11+ Maths', url: '/el-plus-cat/maths_11', icon: 'calculator', type: 'maths_11' },
    { title: '11+ English', url: '/el-plus-cat/english_11', icon: 'text', type: 'english_11' },
    { title: '11+ Science', url: '/el-plus-cat/science_11', icon: 'planet', type: 'science_11' },
    { title: 'Profile', url: '/profile', icon: 'person', type: 'profile' },
    { title: 'Favourites', url: '/favorites', icon: 'heart', type: 'fav' },
    { title: 'Feedback', url: '/feedback', icon: 'clipboard', type: 'feedback' },
    { title: 'Logout', url: '/profile', icon: 'log-out', type: 'logout' }
  ];

  constructor(
    private platform: Platform
    , private splashScreen: SplashScreen
    , private statusBar: StatusBar
    , public storage: Storage
    , private userService: UserService
    , private router: Router
    , private menuCtrl: MenuController
  ) { }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      setTimeout(() => this.splashScreen.hide(), 100);
      this.storage.get("authCookie").then(val => this.checkAuthorization.call(this, val));
    });
  }

  checkAuthorization(val) {
    if (val)
      this.userService.getUser().then(user => this.redirectAutorizedUser.call(this, user));
    else
      this.router.navigate(['login']);
  }

  /**
   * Redirects user to either home/profile/login page.
   * @param user
   * @returns 
   */
  redirectAutorizedUser(user) {
    if (user == null || user == '') {
      this.router.navigate(['login']);
      return;
    }
    this.user = user;
    if ((!this.user.firstname && !this.user.lastname) || !this.user.email) {
      this.router.navigate(['profile']);
      return;
    }
  }


  ngOnInit() {
    this.initializeApp();
  }

  openPage(page) {
    if (page.title == "Logout") {
      this.logout();
      return;
    }
    if (page.type == 'gk') {
      let quiz = { 'ID': 0, 'name': page.title };
      this.router.navigate(['quiz'], { state: { quiz } });
      return;
    }
    this.router.navigate([page.url], { state: page });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }
}
