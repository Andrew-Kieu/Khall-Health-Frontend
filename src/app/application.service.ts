import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Application {
  id?: number;
  status: string;
  applicationDate: Date;
  lastUpdated: Date;
  hospitalName: string;
  contactExpiration: Date;
  // Add other fields as necessary
}

@Injectable({
providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:8080/api/applications'; // Adjust the base URL as needed

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