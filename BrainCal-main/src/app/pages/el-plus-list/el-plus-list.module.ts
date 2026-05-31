import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElPlusListPageRoutingModule } from './el-plus-list-routing.module';

import { ElPlusListPage } from './el-plus-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElPlusListPageRoutingModule
  ],
  declarations: [ElPlusListPage]
})
export class ElPlusListPageModule {}
