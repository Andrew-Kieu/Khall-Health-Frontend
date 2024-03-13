import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://your-java-backend-api-url/api'; // Update with your API URL

  constructor(private http: HttpClient) { }

  // Function to save data
  saveData(data: any): Observable<any> {
    const url = ${this.apiUrl}/save; // Update with your save endpoint
    return this.http.post<any>(url, data).pipe(
      catchError(this.handleError<any>('saveData'))
    );
  }

  // Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(${operation} failed: ${error.message});
      return of(result as T);
    };
  }
}