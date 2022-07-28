import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {LoginService} from "../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  sessionId = localStorage.getItem('status')

  constructor(private loginService: LoginService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),

    })
  }

  login(): void {
    this.loginService.login(this.form.getRawValue()).subscribe(value => {
      this.loginService.setToken(value)
      this.loginService.setSessionId(true)
      this.router.navigate(['products'])
    })
  }
}
