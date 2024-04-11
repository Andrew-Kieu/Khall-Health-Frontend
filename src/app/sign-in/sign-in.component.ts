import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';


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
  successMessage: string = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private storageService: StorageService, // Injected StorageService
    private router: Router
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Added email validation
      password: ['', [Validators.required, Validators.minLength(6)]] // Added a minimum length validation
    });
  }

  onSubmit() {
    this.submitted = true;
  
    if (this.signInForm.invalid) {
      this.successMessage = 'Please fill in the form correctly.';
      return;
    }
  
    this.authService.signIn(this.signInForm.value).subscribe({
      next: (res) => {
        if (res.jwt) {
          this.storageService.saveToken(res.jwt);
          this.storageService.saveUser({ id: res.id, role: res.userRoles }); // Adjust according to your user object
      
          console.log('Redirecting to home...');
          this.router.navigateByUrl('/').then(success => {
            console.log('Redirection success:', success);
          }).catch(error => {
            console.error('Redirection error:', error);
          });
        } else {
          this.successMessage = 'Login failed. Please check your credentials.';
        }
      },
    });
  }
  }
