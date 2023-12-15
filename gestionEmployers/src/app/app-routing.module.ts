import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'manage-employers',
    loadChildren: () => import('./manage-employers/manage-employers.module').then( m => m.ManageEmployersPageModule)
  },
  {
    path: 'deconnexion',
    loadChildren: () => import('./deconnexion/deconnexion.module').then( m => m.DeconnexionPageModule)
  },
  {
    path: 'create-employee',
    loadChildren: () => import('./create-employee/create-employee.module').then( m => m.CreateEmployeePageModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () => import('./edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
