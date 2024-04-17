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
    return this.http.get<Nurse[]>(this.nurseURL + "/api/nurses");
  }
  
  getNurseById(nurseId: string): Observable<Nurse> {
    return this.http.get<Nurse>(`${this.nurseURL}/api/nurses/${nurseId}`);
  }
  updateNurse(nurseId: string, updatedNurseData: any): Observable<any> {
    return this.http.put(`${this.nurseURL}/api/nurses/${nurseId}`, updatedNurseData);
  }

  addNurse(nurse: any): Observable<any> {
    return this.http.post(this.nurseURL + "/api/nurses", nurse);
  }

  deleteNurse(nurseId: string): Observable<any> {
    return this.http.delete(`${this.nurseURL}/api/nurses/${nurseId}`);
  }


}
