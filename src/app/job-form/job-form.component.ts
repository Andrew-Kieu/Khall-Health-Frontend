import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router if you need to navigate
import { HospitalService } from '../hospital.service';
import { NgIf } from '@angular/common';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent implements OnInit {
  jobForm: FormGroup;
  submitted = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private jobService: JobService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.jobForm = this.formBuilder.group({
      contractId: [null, Validators.required],
      hospitalId: ['', Validators.required],
      hospitalName: ['', Validators.required],
      title: ['', Validators.required],
      hospitalAddress: ['', Validators.required],
      hospitalEmail: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      specialtyReq: ['', Validators.required],
      licenseReq: ['', Validators.required],
      certificationReq: ['', Validators.required],
      degreeReq: ['', Validators.required],
      details: ['', Validators.required],
      contractExpiration: [null, Validators.required],
      payPerWeek: [null, [Validators.required, Validators.min(0)]],
      hoursPerWeek: [null, [Validators.required, Validators.min(1)]],
      contractLength: [null, [Validators.required, Validators.min(1)]],
      isActive: [true] 
    });
    
  }

  ngOnInit(): void {
  }

  sendJob() {
    this.submitted = true;
    if (this.jobForm.invalid) {
      return;
    }

    this.jobService.createJob(this.jobForm.value).subscribe(
      response => {
        console.log('Job added successfully:', response);
        this.successMessage = 'Job added successfully';
        this.jobForm.reset();
        this.submitted = false;
        this.router.navigate(['/jobs']);
      },
      error => {
        console.error('Error adding job:', error);
        // Check if the error object and message property exist
        const message = error.error?.message || 'No specific error message from server.';
        this.errorMessage = `Failed to add job. ${message}`;
      }
    );
}


}