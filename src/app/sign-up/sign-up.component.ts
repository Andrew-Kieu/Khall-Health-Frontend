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
        // role: ['nurse'] // Set the default role as 'nurse'
      });
  }

  onSubmit() {

    this.userForLoggingIn.register(this.signUpForm.value).subscribe(
      (response) => {
        // Handle successful signup response
        console.log('Signup successful:', response);
        this.router.navigate(['/']);

        // Optionally, you can redirect the user to another page or show a success message
      },
      (error) => {
        // Handle signup error
        console.error('Signup error:', error);
        // Optionally, you can display an error message to the user
      }
    );

    // this.submitted = true;
  
    // if (this.signUpForm.invalid) {
    //   return;
    // }
  
    // // Store user data in localStorage
    // const { firstName, lastName, email, password } = this.signUpForm.value;
    // localStorage.setItem('currentUser', JSON.stringify({ firstName, lastName, email, password }));
    // this.successMessage = 'Sign up successful!';
  
    // localStorage.setItem('signupEmail', email);
    // localStorage.setItem('signupPassword', password);
    // localStorage.setItem('firstName', firstName);
    // localStorage.setItem('lastName', lastName);
    // localStorage.setItem('role', "nurse")
  }

  

  // onSubmit() {
  //   console.log("check check");
  //   this.submitted = true;
  //   this.signUpForm.reset;
  //   if (this.signUpForm.invalid) {
  //     return;
  //   }
  
  //   this.authService.signUp(this.signUpForm.value).subscribe(
  //     (response) => {
  //       console.log('User signed up successfully:', response);
  //       this.successMessage = 'User signed up successfully';
  //       this.signUpForm.reset();
  //       this.submitted = false;
  //     },
  //     (error) => {
  //       console.error('Error signing up user:', error);
  //       // Handle error as needed
  //     }
  //   );
  // }
  
  
  

}


// nurseForm: FormGroup;
//   submitted = false;
//   successMessage: string = '';

//   nurserService = inject(NurseService)

//   constructor (private nurseService: NurseService, 
//     private formBuilder: FormBuilder) {
//     this.nurseForm = this.formBuilder.group({
//       firstName: ['', [Validators.required]], 
//       lastName: ['', [Validators.required]],
//       profession: ['', [Validators.required]], 
//       specialty: ['', [Validators.required]],
//       licenses: ['', [Validators.required]], 
//       certifications: ['', [Validators.required]],
//       degrees: ['', [Validators.required]], 
//     });
//   }
