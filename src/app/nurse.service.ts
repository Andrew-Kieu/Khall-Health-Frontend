import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NursePageComponent } from './nurse-page/nurse-page.component';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  private nurseURL = 'http://localhost:8080';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(
    private http: HttpClient)
  {}



  // getNurses(): Observable<NursePageComponent[]> {
  //   return this.http.get<NursePageComponent[]>(this.nurseURL)
  //     .pipe(
  //       tap(_ => this.log('fetched nurses')),
  //       catchError(this.handleError)
  //     );
  // }
  
  getNurses(): Observable<any> {
    return this.http.get(this.nurseURL + "/api/nurses");
  }

  addNurse(nurse: any): Observable<any> {
    return this.http.post(this.nurseURL + "/api/nurses", nurse);
  }

  // private handleError(error: any): Observable<any> {
  //   console.error('An error occurred:', error); // log to console instead
  //   throw error; // Rethrow the error to propagate it further
  // }

  // private log(message: string) {
  //   console.log(message);
  // }
}
