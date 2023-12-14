import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.page.html',
  styleUrls: ['./deconnexion.page.scss'],
})
export class DeconnexionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /*deconnexionPage(){
    //alert('Login');
    this.router.navigate(['/deconnexion']);

  }*/

}
