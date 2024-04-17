import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Job } from '../job.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hospital-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hospital-sign-up.component.html',
  styleUrl: './hospital-sign-up.component.css'
})
export class HospitalSignUpComponent implements OnInit {
  hospitalForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.hospitalForm = this.fb.group({
      hospitalName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmitHospital(): void {
    if (this.hospitalForm.valid) {
      // Implement your service call here
      console.log("Hospital Data:", this.hospitalForm.value);
      // Potentially navigate somewhere else after the form is successfully submitted
      this.router.navigate(['/hospital-dashboard']);
    } else {
      alert('Please fill all required fields.');
    }
  }
}