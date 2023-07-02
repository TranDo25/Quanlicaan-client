import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _loginService: LoginService, private router: Router) {
  }

  hide = true;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.processsLogin({
      "username": email,
      "password": password
    });
  }

  private processsLogin(data: any) {
    this._loginService.requestLogin(data).subscribe({
      next: (res) => {
        this.router.navigate(['main']);
        console.log(res)

      },
      error: (err) => {
        console.log(err)

      }
    });
  }


}
