import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deconnexionPage(){
    //alert('Login');
    this.router.navigate(['/deconnexion']);

  }

}
