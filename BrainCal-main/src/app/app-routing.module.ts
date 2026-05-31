import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { LoginPage } from './pages/login/login.page';
// import { ProfilePage } from './pages/profile/profile.page';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'trick',
    loadChildren: () => import('./pages/trick/trick.module').then(m => m.TrickPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'maths',
    loadChildren: () => import('./pages/maths/maths.module').then(m => m.MathsPageModule)
  },
  {
    path: 'lang-list',
    loadChildren: () => import('./pages/lang-list/lang-list.module').then(m => m.LangListPageModule)
  },
  {
    path: 'lang-cat',
    loadChildren: () => import('./pages/lang-cat/lang-cat.module').then(m => m.LangCatPageModule)
  },
  {
    path: 'lang',
    loadChildren: () => import('./pages/lang/lang.module').then(m => m.LangPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then(m => m.QuizPageModule)
  },
  {
    path: 'quizes',
    loadChildren: () => import('./pages/quizes/quizes.module').then(m => m.QuizesPageModule)
  },
  {
    path: 'el-plus-cat/:type',
    loadChildren: () => import('./pages/el-plus-cat/el-plus-cat.module').then(m => m.ElPlusCatPageModule)
  },
  {
    path: 'el-plus-list',
    loadChildren: () => import('./pages/el-plus-list/el-plus-list.module').then(m => m.ElPlusListPageModule)
  },
  {
    path: 'el-plus',
    loadChildren: () => import('./pages/el-plus/el-plus.module').then(m => m.ElPlusPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then(m => m.FeedbackPageModule)
  }
];

const newpath = [
  {
    path: '',
    loadChildren: () => import('./app.module').then(m => m.AppModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
