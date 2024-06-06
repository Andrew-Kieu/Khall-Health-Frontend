import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

export interface Job {
  contractId: number;
  hospitalId: string;
  contractId: number;
  hospitalId: string;
  hospitalName: string;
  title: string;
  hospitalAddress: string;
  hospitalEmail: string;
  title: string;
  hospitalAddress: string;
  hospitalEmail: string;
  department: string;
  specialtyReq: string;
  licenseReq: string;
  certificationReq: string;
  degreeReq: string;
  specialtyReq: string;
  licenseReq: string;
  certificationReq: string;
  degreeReq: string;
  details: string;
  contractExpiration: number;
  contractExpiration: number;
  payPerWeek: number;
  hoursPerWeek: number;
  contractLength: number;
  isActive: boolean
  isActive: boolean

}

@Injectable({
  providedIn: 'root'
})


export class JobService {
  private apiUrl = 'http://localhost:8080/api/jobs';  // URL to web API

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  
  private handleError(error: any) {
    console.error('An error occurred:', error.error.message);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  updateJob(jobId: number, updatedJobData: any): Observable<any> {
    return this.http.put<any>(`/api/jobs/${jobId}`, updatedJobData);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}