import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageEmployersPageRoutingModule } from './manage-employers-routing.module';

import { ManageEmployersPage } from './manage-employers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageEmployersPageRoutingModule
  ],
  declarations: [ManageEmployersPage]
})
export class ManageEmployersPageModule {}
