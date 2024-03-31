import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  signUp (signUpRequest: any): Observable<any> {
    return this.http.post<[]>(this.authURL + "/api/auth/signUp", signUpRequest)
  } 

}
