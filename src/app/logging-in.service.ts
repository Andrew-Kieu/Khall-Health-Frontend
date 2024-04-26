import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingInService {

  private baseUrl = 'http://localhost:8080'; // Replace this with your actual backend API URL

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/api/login`, { email, password });
}

}

