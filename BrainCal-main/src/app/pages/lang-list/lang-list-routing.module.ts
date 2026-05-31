import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangListPage } from './lang-list.page';

const routes: Routes = [
  {
    path: '',
    component: LangListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LangListPageRoutingModule {}
