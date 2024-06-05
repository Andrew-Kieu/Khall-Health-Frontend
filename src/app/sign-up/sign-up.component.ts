import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { UsersForLoggingInService } from '../users-for-logging-in.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm: FormGroup;
  submitted = false;
  successMessage: string = '';

  

  constructor(private formBuilder: FormBuilder, private userForLoggingIn: UsersForLoggingInService,   private router: Router
    ) {
    this.signUpForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }

  onSubmit() {

    this.userForLoggingIn.register(this.signUpForm.value).subscribe(
      (response) => {
        // Handle successful signup response
        console.log('Signup successful:', response);
        this.router.navigate(['/']);

      },
      (error) => {
        // Handle signup error
        console.error('Signup error:', error);
      }
    );

   
  }

  


  
  
  

}



