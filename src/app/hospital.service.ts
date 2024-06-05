import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Hospital interface directly in the service file
export interface Hospital {
  \

  hospitalId?: number;
  hospitalName: string;
  hospitalAddress: string;
  deptsHiring: string;
  numberOfContracts: number;
  city: string;
  hospitalEmail: string;
  topReviews: string;


}

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private baseUrl = 'http://localhost:8080/api/hospitals'; 

  constructor(private http: HttpClient) { }

  // Create a new hospital record
  createHospital(hospital: Hospital): Observable<Hospital> {
    return this.http.post<Hospital>(this.baseUrl, hospital);
  }

  // Retrieve all hospitals
  getAllHospitals(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.baseUrl);
  }

  // Retrieve a single hospital by ID
  getHospitalById(id: number): Observable<Hospital> {
    return this.http.get<Hospital>(`${this.baseUrl}/${id}`);
  }

  // Update an existing hospital record
  updateHospital(id: number, hospital: Hospital): Observable<Hospital> {
    return this.http.put<Hospital>(`${this.baseUrl}/${id}`, hospital);
  }

  // Delete a hospital record
  deleteHospital(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
