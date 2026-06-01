import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu.page';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'folder/Inbox',
//     pathMatch: 'full'
//   },
//   {
//     path: 'folder/:id',
//     loadChildren: () => import('../../folder/folder.module').then( m => m.FolderPageModule)
//   }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })

const routes: Routes = [
    {
      path: '',
      component: MenuPage
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class MenuPageRoutingModule {}
