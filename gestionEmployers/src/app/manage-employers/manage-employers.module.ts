import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageEmployersPageRoutingModule } from './manage-employers-routing.module';

import { ManageEmployersPage } from './manage-employers.page';
import { EmployeeService } from '../services/employee.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageEmployersPageRoutingModule
  ],
  declarations: [ManageEmployersPage],
  providers: [EmployeeService],
})
export class ManageEmployersPageModule {}
