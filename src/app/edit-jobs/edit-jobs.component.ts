import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NurseService } from '../nurse.service';
import { Validator } from '@angular/forms'
import { Nurse } from '../nurse';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { JobService } from '../job.service';


@Component({
  selector: 'app-edit-jobs',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './edit-jobs.component.html',
  styleUrl: './edit-jobs.component.css'
})
export class EditJobsComponent {
  jobForm: FormGroup | null = null;
  jobId: number | null = null; 

  successMessage: string | null = null; 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      contractId: [null],
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
      contractExpiration: ['', Validators.required],
      payPerWeek: ['', [Validators.required, Validators.min(0)]],
      hoursPerWeek: ['', [Validators.required, Validators.min(1)]],
      contractLength: ['', [Validators.required, Validators.min(1)]],
      isActive: [true]
    });

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.jobId = parseInt(id, 10); 
        this.populateForm();
      }
    });
  }

  populateForm() {
    if (this.jobId && this.jobForm) {
      this.jobService.getJobById(this.jobId).subscribe((job: any) => {
        if (this.jobForm) {
          this.jobForm.patchValue(job);
        }
      });
    }
  }

  updateJob() {
    if (this.jobForm && this.jobId) { 
      const updatedJobData = this.jobForm.value;
      this.jobService.updateJob(this.jobId, updatedJobData).subscribe(
        (response: any) => {
          this.successMessage = 'Job updated successfully'; 
          console.log('Job updated successfully:', response);
        },
        (error) => {
          console.error('Error updating job:', error);
        }
      );
    }
  }
}