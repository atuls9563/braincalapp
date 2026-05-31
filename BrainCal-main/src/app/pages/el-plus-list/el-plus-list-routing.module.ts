import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElPlusListPage } from './el-plus-list.page';

const routes: Routes = [
  {
    path: '',
    component: ElPlusListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElPlusListPageRoutingModule {}
