import { JobService } from '../job.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NurseFormComponent } from '../nurse-form/nurse-form.component';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NurseService } from '../nurse.service';
import { NgFor } from '@angular/common';
import { StringifyOptions } from 'querystring';
import { Nurse } from '../nurse';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { EditNurseComponent } from '../edit-nurse/edit-nurse.component';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Job } from '../job.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  jobsArray: Job[] = [];
  selectedJob: Job | null = null;
  showSidebar = false;

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs().subscribe(
      (jobs) => {
        this.jobsArray = jobs;
      },
      (error) => {
        console.error('Error fetching jobs', error);
      }
    );
  }

  showMoreInfo(job: Job): void {
    this.selectedJob = job;
    this.showSidebar = true;
  }

  addJobForm(): void {
    this.router.navigateByUrl('/job-form'); // Make sure the routing path matches your Angular Router configuration
  }

  editJob(): void {
    // logic for editing a job
  }

  deleteJob() {
    if (confirm('Are you sure you want to delete this nurse?')) {
      // Get nurse ID from the form or any other source
      const jobId = this.selectedJob?.contractId; // Assuming there's an ID field in the form
      // console.log(this.nurseForm.get('id')?.value);
      if (jobId) {
        this.jobService.deleteJob(jobId).subscribe(
          () => {
            console.log('Nurse deleted successfully');
            // Optionally, reset the form or clear form fields
          },
          (error) => {
            console.error('Error deleting nurse:', error);
            // Handle error as needed
          }
        );
      }
    }
  }
  isHospital(): boolean {

    
      // Check if localStorage is available
    if (typeof localStorage !== 'undefined' && localStorage.getItem('role') === 'hospital') {
      // Retrieve user data from localStorage
      // const storedUser = localStorage.getItem('currentUser');
      // if (storedUser) {
      //   const user = JSON.parse(storedUser);
      //   return user.role === 'hospital';
      // }
      return true;
    }
    // if (typeof localStorage !== 'undefined') {
    //   // Retrieve user data from localStorage
    //   const storedUser = localStorage.getItem('currentUser');
    //   if (storedUser) {
    //     const user = JSON.parse(storedUser);
    //     return user.role === 'hospital';
    //   }
    // }
    return false; // Default to false if user data is not available or if the user's role is not "hospital"
  }
  
  applyForJob(): void {
    // logic for applying for a job
  }

  pinJob(): void {
    // logic for pinning a job
  }

  closeSidebar(): void {
    this.selectedJob = null;
    this.showSidebar = false;
  }
}