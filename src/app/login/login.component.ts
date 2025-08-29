import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.css']
})
export class LoginComponent {
  username = ''; password = ''; message = '';

  constructor(private api: ApiService, private router: Router) {}

  register() {
    this.api.register({username: this.username, password: this.password})
      .subscribe({ next: _ => this.message = 'Registered!', error: e => this.message = 'Error: ' + (e?.error || e?.message)});
  }

  login() {
    this.api.login({username: this.username, password: this.password})
      .subscribe({ next: res => {
                    this.message = res;
                    if(res.includes('Successful')) {
                      localStorage.setItem('loggedIn','true');
                      this.router.navigate(['/halls']);
                    }
                  },
                  error: e => this.message = 'Error: ' + (e?.error || e?.message)});
  }
}
