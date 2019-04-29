import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormEmail;
  loginFormPassword;
  loginError: string;

  ngOnInit(): void {
  }



  constructor(public fb: FormBuilder, private authService: AuthService) {
    this.loginForm = fb.group({
      loginFormEmail: ['', [Validators.required, Validators.email]],
      loginFormPassword: ['', Validators.required],
    });
  }

  async login() {
    this.loginError = '';
    if (this.loginForm.get('loginFormEmail').valid && this.loginForm.get('loginFormPassword').valid){
    this.loginError = await this.authService.
      login(this.loginForm.get('loginFormEmail').value, this.loginForm.get('loginFormPassword').value);
    }
  }

  async resetPassword() {
    if (this.loginForm.get('loginFormEmail').valid) {
      this.authService.resetPassword(this.loginForm.get('loginFormEmail').value);
    }
  }

}
