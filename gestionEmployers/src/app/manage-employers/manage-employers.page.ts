import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-manage-employers',
  templateUrl: './manage-employers.page.html',
  styleUrls: ['./manage-employers.page.scss'],
})
export class ManageEmployersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deconnexionPage(){
    //alert('Login');
    this.router.navigate(['/deconnexion']);

  }

}
