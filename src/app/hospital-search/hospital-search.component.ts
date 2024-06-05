import { Component } from '@angular/core';
import { NurseFormComponent } from '../nurse-form/nurse-form.component';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NurseService } from '../nurse.service';
import { NgFor, NgIf } from '@angular/common';
import { StringifyOptions } from 'querystring';
import { Nurse } from '../nurse';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { EditNurseComponent } from '../edit-nurse/edit-nurse.component';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Hospital } from '../hospital.service';
import { OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';


@Component({
  selector: 'app-hospital-search',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './hospital-search.component.html',
  styleUrls: ['./hospital-search.component.css']
})
export class HospitalSearchComponent  implements OnInit {
  hospitalArray: Hospital[] = [];
  selectedHospital: Hospital | null = null;
  showSidebar = false;

  hospitalForm: FormGroup = this.formBuilder.group({
    id: [''],
    // other form fields here
  });

  constructor(
    private formBuilder: FormBuilder,
    private hospitalService: HospitalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHospitals();
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  getHospitals(): void {
    this.hospitalService.getAllHospitals().subscribe(
      (hospitals) => {
        this.hospitalArray = hospitals;
      },
      (error) => {
        console.error('Error fetching hospitals', error);
      }
    );
  }

  searchHospital(): void {
    // Implement search functionality if needed
  }

  showMoreInfo(hospital: Hospital): void {
    this.selectedHospital = hospital;
    this.showSidebar = true;
  }

  editHospital(hospitalId: number): void {
    this.router.navigate(['/editHospital', hospitalId]);
  }

  deleteHospital(): void {
    if (confirm('Are you sure you want to delete this hospital?')) {
      const hospitalId = this.selectedHospital?.hospitalId;
      if (hospitalId) {
        this.hospitalService.deleteHospital(hospitalId).subscribe(
          () => {
            console.log('Hospital deleted successfully');
          },
          (error) => {
            console.error('Error deleting hospital:', error);
          }
        );
      }
    }
  }

  isHospital(): boolean {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('role') === 'hospital') {
     
      return true;
    }
    return false; 
  }

  leaveReview(): void {
  }
}