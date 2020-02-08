import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'addcustomer',
    loadChildren: () => import('./pages/addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'updatebalancerecord',
    loadChildren: () => import('./pages/updatebalancerecord/updatebalancerecord.module').then( m => m.UpdatebalancerecordPageModule)
  },
  {
    path: 'confirmationpopup',
    loadChildren: () => import('./pages/confirmationpopup/confirmationpopup.module').then( m => m.ConfirmationpopupPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
