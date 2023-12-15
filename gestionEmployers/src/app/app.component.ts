import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) { }

  deconnexionPage(){
    //alert('Login');
    this.router.navigate(['/deconnexion']);

  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
