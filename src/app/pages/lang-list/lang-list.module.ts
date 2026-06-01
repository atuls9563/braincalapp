import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LangListPageRoutingModule } from './lang-list-routing.module';

import { LangListPage } from './lang-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LangListPageRoutingModule
  ],
  declarations: [LangListPage]
})
export class LangListPageModule {}
