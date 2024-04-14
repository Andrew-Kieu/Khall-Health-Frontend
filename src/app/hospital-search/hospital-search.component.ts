import { Component } from '@angular/core';
import { HospitalFormComponent } from '../hospital-form/hospital-form.component';
import { RouterLink } from '@angular/router';
import { HospitalService, Hospital } from '../hospital.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hospital-search',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './hospital-search.component.html',
  styleUrls: ['./hospital-search.component.css']
})
export class HospitalSearchComponent {
  hospitalArray: Hospital[] = [];
  selectedHospital: Hospital | null = null;

  constructor(private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.getHospitals();
  }

  getHospitals(): void {
    this.hospitalService.getAllHospitals().subscribe((hospitals) => {
      this.hospitalArray = hospitals;
    }, error => {
      console.error('Error fetching hospitals', error);
    });
  }
  
  // showMoreInfo(hospital: Hospital): void {
  //   this.selectedHospital = hospital;
  // }
  showSidebar = false;


  showMoreInfo(hospital: Hospital): void {
    this.selectedHospital = hospital;
    this.showSidebar = true;
  }

  editHospital(): void {
    // Implementation for editing a hospital
  }

  deleteHospital(): void {
    // Implementation for deleting a hospital
  }

  leaveReview(): void {
    // Implementation for leaving a review
  }
    
}