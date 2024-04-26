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

    // const storedEmail = localStorage.getItem('signupEmail');
    // const storedPassword = localStorage.getItem('signupPassword');
  
    this.submitted = true;

    if (this.signInForm.invalid) {
      return;
    }


    // Simulate successful login
    // const user = {
    //   email: email,
    //   role: 'nurse' // Assuming role should be set to 'nurse'
    // };


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
    // if (email === storedEmail && password === storedPassword) {
      // Simulate successful login
      // const user = {
      //   email: email,
      //   role: 'nurse' // Assuming role should be set to 'nurse'
      
  
      // Store user data in localStorage upon successful login
      // this.storageService.setCurrentUser(user);
  
      // Redirect to the desired route
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


// export class SignInComponent {
//   signInForm: FormGroup;
//   submitted = false;
//   successMessage: string = '';

//   constructor(
//     private authService: AuthService,
//     private formBuilder: FormBuilder,
//     private storageService: StorageService, // Injected StorageService
//     private router: Router
//   ) {
//     this.signInForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]], // Added email validation
//       password: ['', [Validators.required, Validators.minLength(6)]] // Added a minimum length validation
//     });
//   }

  // onSubmit() {
  //   this.submitted = true;
  
  //   if (this.signInForm.invalid) {
  //     this.successMessage = 'Please fill in the form correctly.';
  //     return;
  //   }
  
  //   this.authService.signIn(this.signInForm.value).subscribe({
  //     next: (res) => {
  //       if (res.jwt) {
  //         this.storageService.saveToken(res.jwt);
  //         this.storageService.saveUser({ id: res.id, role: res.userRoles }); // Adjust according to your user object
      
  //         console.log('Redirecting to home...');
  //         this.router.navigateByUrl('/').then(success => {
  //           console.log('Redirection success:', success);
  //         }).catch(error => {
  //           console.error('Redirection error:', error);
  //         });
  //       } else {
  //         this.successMessage = 'Login failed. Please check your credentials.';
  //       }
  //     },
  //   });
  // }
  
