import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElPlusPageRoutingModule } from './el-plus-routing.module';

import { ElPlusPage } from './el-plus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElPlusPageRoutingModule
  ],
  declarations: [ElPlusPage]
})
export class ElPlusPageModule {}
