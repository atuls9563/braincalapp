import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangCatPage } from './lang-cat.page';

const routes: Routes = [
  {
    path: '',
    component: LangCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LangCatPageRoutingModule {}
