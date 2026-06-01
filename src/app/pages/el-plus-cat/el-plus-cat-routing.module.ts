import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElPlusCatPage } from './el-plus-cat.page';

const routes: Routes = [
  {
    path: '',
    component: ElPlusCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElPlusCatPageRoutingModule {}
