import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls :['app.component.css'],
  template: `
    <h1 class="logo">Marriage Hall Booking</h1>
    <nav>
      <a routerLink="/" class="login">Login</a>
      <a routerLink="/halls" *ngIf="isLoggedIn()" class="halls_nav">Halls</a>
      <a routerLink="/bookings" *ngIf="isLoggedIn()" class="booking_nav">Bookings</a>
      <button (click)="logout()" *ngIf="isLoggedIn()" class="logout">Logout</button>
    </nav>
    <router-outlet></router-outlet>
  ` ,
  
})
export class AppComponent {
  constructor(private router: Router) {}
  isLoggedIn() { return localStorage.getItem('loggedIn') === 'true'; }
  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/']);
  }
}
