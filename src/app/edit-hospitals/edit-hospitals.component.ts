import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { NurseService } from '../nurse.service';
import { Hospital, HospitalService } from '../hospital.service';
// import { NurseService } from '../nurse.service';
import { Validator } from '@angular/forms'
import { Nurse } from '../nurse';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-hospitals',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './edit-hospitals.component.html',
  styleUrl: './edit-hospitals.component.css'
})
export class EditHospitalComponent implements OnInit {
  editHospitalForm: FormGroup | null = null;
  hospitalId: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private hospitalService: HospitalService
  ) { }

  ngOnInit(): void {
    this.editHospitalForm = this.formBuilder.group({
      hospitalName: ['', Validators.required],
      hospitalAddress: ['', Validators.required],
      deptsHiring: ['', Validators.required],
      numberOfContracts: ['', Validators.required],
      city: ['', Validators.required],
      hospitalEmail: ['', [Validators.required, Validators.email]],
      topReviews: [''] // Added topReviews field
    });

    this.route.params.subscribe(params => {
      const id: number = parseInt(params['id'], 10);
      if (!isNaN(id)) {
        this.hospitalId = id;
        this.populateForm();
      } else {
        console.error('Invalid hospital ID:', params['id']);
      }
    });
  }

  populateForm(): void {
    if (this.hospitalId && this.editHospitalForm) {
      this.hospitalService.getHospitalById(this.hospitalId).subscribe((hospital: Hospital) => {
        if (this.editHospitalForm) {
          this.editHospitalForm.patchValue({
            hospitalName: hospital.hospitalName,
            hospitalAddress: hospital.hospitalAddress,
            deptsHiring: hospital.deptsHiring,
            numberOfContracts: hospital.numberOfContracts,
            city: hospital.city,
            hospitalEmail: hospital.hospitalEmail,
            topReviews: hospital.topReviews
          });
        }
      });
    }
  }

  updateHospital(): void {
    if (this.editHospitalForm) {
      const updatedHospitalData = this.editHospitalForm.value;
      if (this.hospitalId !== null) {
        this.hospitalService.updateHospital(this.hospitalId, updatedHospitalData).subscribe(
          (response: any) => { // Define the type of response explicitly
            console.log('Hospital updated successfully:', response);
            // Handle success as needed
          },
          (error: any) => {
            console.error('Error updating hospital:', error);
            // Handle error as needed
          }
        );
      }
    }
  }
}