import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

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

  autherizationService = inject(AuthService);

  
  constructor(private authService: AuthService, private formBuilder:FormBuilder){
    this.signUpForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['', Validators.required]
      });


  }

  onSubmit() {
    console.log("check check");
    this.submitted = true;
    this.signUpForm.reset;
    if (this.signUpForm.invalid) {
      return;
    }
  
    this.authService.signUp(this.signUpForm.value).subscribe(
      (response) => {
        console.log('User signed up successfully:', response);
        this.successMessage = 'User signed up successfully';
        this.signUpForm.reset();
        this.submitted = false;
      },
      (error) => {
        console.error('Error signing up user:', error);
        // Handle error as needed
      }
    );
  }
  
  
  

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
