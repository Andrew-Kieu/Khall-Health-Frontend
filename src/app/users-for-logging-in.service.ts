import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersForLoggingInService {

  private baseUrl = 'http://localhost:8080/api/usersForLogin'; // Replace this with your actual backend API URL

  constructor(private http: HttpClient) { }

  register(user:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }
}
