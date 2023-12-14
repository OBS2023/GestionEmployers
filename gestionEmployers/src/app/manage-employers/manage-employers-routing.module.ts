import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageEmployersPage } from './manage-employers.page';

const routes: Routes = [
  {
    path: '',
    component: ManageEmployersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageEmployersPageRoutingModule {}
