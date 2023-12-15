// create-employee.page.ts
import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: 'create-employee.page.html',
  styleUrls: ['create-employee.page.scss'],
})
export class CreateEmployeePage {
  // Déclarez les propriétés
  employeeName: string = '';
  employeeFirstname: string = '';
  employeeEmail: string = '';

  constructor(private employeeService: EmployeeService) {}

  onSubmit() {
    const newEmployee = {
      name: this.employeeName,
      firstname: this.employeeFirstname,
      email: this.employeeEmail,
    };

    // Envoyer les données à EmployeeService
    this.employeeService.setEmployeeData(newEmployee);
  }
}
