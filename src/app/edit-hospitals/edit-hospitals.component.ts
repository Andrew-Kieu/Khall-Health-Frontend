import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NurseService } from '../nurse.service';
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
  editNurseForm: FormGroup | null = null;
  nurseId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private nurseService: NurseService
  ) { }

  ngOnInit(): void {
    // Get the nurse ID from the route parameters
    
    // Initialize the form with empty fields
    this.editNurseForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      profession: ['', Validators.required],
      specialty: ['', Validators.required],
      licenses: ['', Validators.required],
      certifications: ['', Validators.required],
      degrees: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      employed: ['', Validators.required],
      lookingForWork: ['', Validators.required],
      previousEmployment: ['', Validators.required],
      email: ['', Validators.required],
      appliedToList: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.nurseId = params['id'];
      // Retrieve nurse details by ID and populate the form
      this.populateForm();
    });
  
  }

  populateForm() {
    if (this.nurseId && this.editNurseForm) {
      // Retrieve nurse details by ID and populate the form
      this.nurseService.getNurseById(this.nurseId).subscribe((nurse: Nurse) => {
        if (this.editNurseForm) {
          this.editNurseForm.patchValue({
            firstName: nurse.firstName,
            lastName: nurse.lastName,
            profession: nurse.profession,
            specialty: nurse.specialty,
            licenses: nurse.licenses,
            certifications: nurse.certifications,
            degrees: nurse.degrees,
            city: nurse.city,
            state: nurse.state,
            employed: nurse.employed,
            lookingForWork: nurse.lookingForWork,
            previousEmployment: nurse.previousEmployment,
            email: nurse.email,
            appliedToList: nurse.appliedToList
          });
        }
      });
    }
  }

  updateNurse() {
    if (this.editNurseForm) {
      // Update nurse details
      const updatedNurseData = this.editNurseForm.value;
      this.nurseService.updateNurse(this.nurseId!, updatedNurseData).subscribe(
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
