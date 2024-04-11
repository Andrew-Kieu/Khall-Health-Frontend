import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NursePageComponent } from './nurse-page/nurse-page.component';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs';
import { tap } from 'rxjs';
import { Nurse } from './nurse';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }

  private nurseURL = 'http://localhost:8080';
  private dataPath = 'assets/nurse.json';

  

  constructor(
    private http: HttpClient)
  {}

  getNurses(): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(this.dataPath);
  }
  
// httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  // getNurses(): Observable<NursePageComponent[]> {
  //   return this.http.get<NursePageComponent[]>(this.nurseURL)
  //     .pipe(
  //       tap(_ => this.log('fetched nurses')),
  //       catchError(this.handleError)
  //     );
  // }
  
  /*getNurses(): Observable<any> {
    return this.http.get(this.nurseURL + "/api/nurses");
  }*/

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
