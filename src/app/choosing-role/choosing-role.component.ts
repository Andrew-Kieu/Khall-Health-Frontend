import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Job } from '../job.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HospitalSignUpComponent } from '../hospital-sign-up/hospital-sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-choosing-role',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './choosing-role.component.html',
  styleUrl: './choosing-role.component.css'
})

export class ChoosingRoleComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      role: ['', Validators.required]
      // Add other form controls as necessary
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signUpForm.valid) {
      switch (this.signUpForm.value.role) {
        case 'hospital':
          this.router.navigate(['/hospital-signUp']); // Redirect to the hospital sign-up page
          break;
        case 'nurse':
          this.router.navigate(['/signUp']); // Redirect to the nurse sign-up page
          break;
        default:
          // Handle unknown role or add error handling
          break;
      }
    } else {
      // Handle form validation errors or alert the user
      alert('Please fill all required fields and select a role.');
    }
  }
}