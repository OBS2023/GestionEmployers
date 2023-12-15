// manage-employers.page.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-manage-employers',
  templateUrl: 'manage-employers.page.html',
  styleUrls: ['manage-employers.page.scss'],
})
export class ManageEmployersPage implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      const employee = {
        firstname: `Prénom ${i}`,
        email: `employe${i}@exemple.com`
      };
      this.employees.push(employee);
    }
  }

  editEmployee(employee: any) {
    // Logique pour éditer l'employé
    console.log('Edit Employee:', employee);
  }

   deleteEmployee(employee: any) {
    // Trouver l'index de l'employé dans le tableau
    const index = this.employees.indexOf(employee);

    // Vérifier si l'employé a été trouvé
    if (index !== -1) {
      // Supprimer l'employé du tableau
      this.employees.splice(index, 1);
      console.log('Employee deleted:', employee);
    } else {
      console.log('Employee not found:', employee);
    }
  }
}
