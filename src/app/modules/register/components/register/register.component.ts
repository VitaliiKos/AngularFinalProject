import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../../services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  profileForm: FormGroup;
  userEmailError: string;
  userPhoneError: string;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{6,20}')
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{6,20}')
      ]),
      profile: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.pattern('(^[a-zA-Zа-яА-Я].{2,20}$)')
        ]),
        surname: new FormControl(null, [
          Validators.required,
          Validators.pattern('(^[a-zA-Zа-яА-Я].{2,20}$)')
        ]),
        born: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required,
          Validators.pattern('(^\\+380[\\d]{9}$)')
        ])
      })
    }, [this._checkPasswords])
  }

  register(): void {
    const rawValue = this.form.getRawValue();
    delete rawValue.confirmPassword;

    this.authService.register(rawValue).subscribe({
        next: () => {
          this.router.navigate(['login'])
        },
        error: e => {
          if (e.error.profile) {
            this.userPhoneError = e.error.profile.phone
          } else {
            this.userEmailError = e.error.email[0]
          }

        }

      }
    )
  }

  _checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')
    return password?.value === confirmPassword?.value ? null : {notSame: 'passwords do not match'}
  }
}
