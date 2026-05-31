import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElPlusPage } from './el-plus.page';

const routes: Routes = [
  {
    path: '',
    component: ElPlusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElPlusPageRoutingModule { }
