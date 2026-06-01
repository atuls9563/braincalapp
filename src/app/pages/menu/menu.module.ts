import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuPage } from './menu.page';
import { CommonModule } from '@angular/common';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [MenuPage],
  entryComponents: [],
  imports: [
      CommonModule,
    //BrowserModule,
    IonicModule.forRoot(),
    // AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [MenuPage]
})
export class MenuPageModule {}
