import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { NurseService } from '../nurse.service';
import { Hospital, HospitalService } from '../hospital.service';
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
    // Get the nurse ID from the route parameters
    
    // Initialize the form with empty fields
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
      // Convert the 'id' parameter to a number
      const id: number = parseInt(params['id'], 10);
      // Check if the conversion was successful
      if (!isNaN(id)) {
        // Assign the converted ID to the hospitalId property
        this.hospitalId = id;
        // Retrieve hospital details by ID and populate the form
        this.populateForm();
      } else {
        // Handle the case where 'id' parameter is not a valid number
        console.error('Invalid hospital ID:', params['id']);
        // You may want to handle this error by redirecting to an error page or displaying an error message
      }
    });
  
  }

  populateForm() {
    if (this.hospitalId && this.editHospitalForm) {
      // Retrieve nurse details by ID and populate the form
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

  updateHospital() {
    if (this.editHospitalForm) {
      // Update nurse details
      const updatedNurseData = this.editHospitalForm.value;
      this.hospitalService.updateHospital(this.hospitalId!, updatedNurseData).subscribe(
        (response: any) => { // Define the type of response explicitly
          console.log('Nurse updated successfully:', response);
          // Handle success as needed
        },
        (error) => {
          console.error('Error updating nurse:', error);
          // Handle error as needed
        }
      );
    }
  }
}
