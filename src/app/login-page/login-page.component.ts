import { Component, OnInit } from '@angular/core';
import loginData from '../../assets/mocks/login.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  credentials: any = {};
  constructor(private router: Router) {
  }

  ngOnInit(): void { }

  loginClicked() {
    if ((this.credentials.username == loginData.data.username) &&
      (this.credentials.password == loginData.data.password)) {
      this.router.navigate(['/table']);
    } else {
      alert("Invalid data");
    }
  }
}
