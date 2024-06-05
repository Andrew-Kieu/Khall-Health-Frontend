import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Application {
  applicationId: number;
  contractId: number;
  nurseId: number;
  hospitalName: string;
  contactExpiration: Date;
  datMade: Date;
  accepted: boolean;
 
  // Add other fields as necessary
}

@Injectable({
providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:8080/api/applications'; 

  constructor(private http: HttpClient) { }

  createApplication(application: Application): Observable<Application> {
      return this.http.post<Application>(this.baseUrl, application);
  }

  getAllApplications(): Observable<Application[]> {
      return this.http.get<Application[]>(this.baseUrl);
  }

  getApplicationById(id: number): Observable<Application> {
      return this.http.get<Application>(`${this.baseUrl}/${id}`);
  }

  updateApplication(id: number, application: Application): Observable<Application> {
      return this.http.put<Application>(`${this.baseUrl}/${id}`, application);
  }

  deleteApplication(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}