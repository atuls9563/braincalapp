import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizesPageRoutingModule } from './quizes-routing.module';

import { QuizesPage } from './quizes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizesPageRoutingModule
  ],
  declarations: [QuizesPage]
})
export class QuizesPageModule {}
