import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  hospitalName: string;
  detailedAddress: string;
  contactEmail: string;
  department: string;
  requiredSpecialty: string;
  requiredLicenses: string;
  requiredCertifications: string;
  requiredDegrees: string;
  details: string;
  expiration: string;
  pay: number;
  hoursPerWeek: number;
  contractLength: number;
  isActive: boolean;

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
  updateJob(job: Job): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}/${job.id}`, job);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}