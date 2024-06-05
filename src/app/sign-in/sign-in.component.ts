import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { LoggingInService } from '../logging-in.service';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, NgIf],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})


export class SignInComponent {
  signInForm: FormGroup;
  submitted = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private router: Router,
    private loggingInService: LoggingInService
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {

    
    this.submitted = true;

    if (this.signInForm.invalid) {
      return;
    }


  

    const { email, password } = this.signInForm.value;
    this.loggingInService.login(email, password).subscribe(
      (response) => {
        // Handle successful login response
        console.log('Login successful:', response);
        const user = response; 
        if (user.firstName != null && user.lastName != null){
          localStorage.setItem('firstName', user.firstName)
          localStorage.setItem('lastName', user.lastName)
          localStorage.setItem('role', 'nurse')
        }
        if(user.hospitalName != null){
          localStorage.setItem('hospitalName', user.hospitalName)
          localStorage.setItem('role', 'hospital')
        }
  
      this.router.navigate(['/']);
      },
     (error) => {
      // Handle login error
      console.error('Login error:', error);
      this.errorMessage = 'Invalid username or password';
    }
  );
  }
}


