import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-lang-cat',
  templateUrl: './lang-cat.page.html',
  styleUrls: ['./lang-cat.page.scss'],
})
export class LangCatPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  openElPlusPage(postType,heading){
    // this.navCtrl.push(LangListPage,{type:postType,heading:heading});

    let navigationExtras: NavigationExtras = {
      state: {
        type: postType,
        heading:heading
      }
    };
    this.router.navigate(['lang-list'], navigationExtras);
  }

}
