import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Job } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgFor],
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

  deleteJob(): void {
    // logic for deleting a job
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