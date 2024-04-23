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
    private router: Router
  ) {
    this.hospitalForm = this.formBuilder.group({
      hospitalName: ['', Validators.required],
      hospitalAddress: ['', Validators.required],
      deptsHiring: ['', Validators.required],
      numberOfContracts: ['', Validators.required],
      city: ['', Validators.required],
      hospitalEmail: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    // Initialization code here if necessary
  }

  sendHospital() {
    this.submitted = true;
    if (this.hospitalForm.invalid) {
      return;
    }

    this.hospitalService.createHospital(this.hospitalForm.value).subscribe(
      (response) => {
        console.log('Hospital added successfully:', response);
        this.successMessage = 'Hospital added successfully';
        this.hospitalForm.reset();
        this.submitted = false;
      },
      (error) => {
        console.error('Error adding hospital:', error);
        this.successMessage = 'Failed to add hospital. Please check your entries.';
      }
    );
  }
}