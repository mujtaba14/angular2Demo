import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:`
              <div style="padding:5px">
                <ul class="nav nav-tabs">
                  <li> <a routerLink="home">Home</a></li>
                  <li> <a routerLink="employee">Employee</a></li>
                </ul>
                <router-outlet></router-outlet>
              </div>
  `
  /* templateUrl: './app.component.html', */
  
})
export class AppComponent {
  title = 'app';
}
