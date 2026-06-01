import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonSlides) slides:IonSlides
  constructor() { }

  ngOnInit() {
  }

  goToSlide(){
    this.slides.slideTo(2,500);
  }

  option={
    loop:true,
    autoplay:true,
    speed:500
  }

}
