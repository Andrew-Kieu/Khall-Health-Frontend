import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router if you need to navigate
import { HospitalService } from '../hospital.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-hospital-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './hospital-form.component.html',
  styleUrl: './hospital-form.component.css'
})

export class HospitalFormComponent implements OnInit {
  hospitalForm: FormGroup;
  submitted = false;
  successMessage: string = '';

  constructor(
    private hospitalService: HospitalService, 
    private formBuilder: FormBuilder,
    private router: Router // Inject Router if you need to navigate after form submission
  ) {
    this.hospitalForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      departmentsHiring: ['', Validators.required],
      numberOfContracts: ['', Validators.required],
      detailedAddress: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    // Initialization code here if necessary
  }

  sendHospital() {
    this.submitted = true;
    if (this.hospitalForm.invalid) {
      return; // Stops the form submission if the form is invalid
    }

    this.hospitalService.createHospital(this.hospitalForm.value).subscribe(
      (response) => {
        console.log('Hospital added successfully:', response);
        this.successMessage = 'Hospital added successfully';
        this.hospitalForm.reset(); // Resets the form after successful submission
        this.submitted = false; // Resets the submission state
        // Optionally navigate to another route
        // this.router.navigate(['/hospital-list']); // Example of navigation after submission
      },
      (error) => {
        console.error('Error adding hospital:', error);
        this.successMessage = 'Failed to add hospital. Please check your entries.'; // Updates the success message to show error
      }
    );
  }
}