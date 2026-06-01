import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElPlusCatPageRoutingModule } from './el-plus-cat-routing.module';

import { ElPlusCatPage } from './el-plus-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElPlusCatPageRoutingModule
  ],
  declarations: [ElPlusCatPage]
})
export class ElPlusCatPageModule {}
