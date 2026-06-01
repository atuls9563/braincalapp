import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LangCatPageRoutingModule } from './lang-cat-routing.module';

import { LangCatPage } from './lang-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LangCatPageRoutingModule
  ],
  declarations: [LangCatPage]
})
export class LangCatPageModule {}
