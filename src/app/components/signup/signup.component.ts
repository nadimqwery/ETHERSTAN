import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  ngOnInit(): void {
  }
  constructor(public fb: FormBuilder, private auth: AuthService) {
    this.registerForm = fb.group({
      registerEmail: ['', [Validators.required, Validators.email]],
      registerConfirmEmail: ['', [Validators.required, Validators.email]],
      registerPassword: ['', Validators.required],
    });
  }
  async register() {
     await  this.auth.register(this.registerForm.get('registerEmail').value, this.registerForm.get('registerPassword').value);
  }

}
