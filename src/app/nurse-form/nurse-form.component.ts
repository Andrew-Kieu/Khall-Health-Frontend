import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControlDirective} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NurseService } from '../nurse.service';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nurse-form',
  standalone: true,
  imports: [ NgIf, ReactiveFormsModule, HttpClientModule],
  templateUrl: './nurse-form.component.html',
  styleUrl: './nurse-form.component.css'
})
export class NurseFormComponent {

  nurseForm: FormGroup;
  submitted = false;
  successMessage: string = '';

  nurserService = inject(NurseService)

  constructor (private nurseService: NurseService, 
    private formBuilder: FormBuilder) {
    this.nurseForm = this.formBuilder.group({
      firstName: ['', [Validators.required]], 
      lastName: ['', [Validators.required]],
      profession: ['', [Validators.required]], 
      specialty: ['', [Validators.required]],
      licenses: ['', [Validators.required]], 
      certifications: ['', [Validators.required]],
      degrees: ['', [Validators.required]], 
    });
  }

  sendNurse() {
    this.submitted = true;
    if (this.nurseForm.invalid) {
      return;
    }

    this.nurseService.addNurse(this.nurseForm.value).subscribe(
      (response) => {
        console.log('Nurse added successfully:', response);
        this.successMessage = 'Nurse added successfully';
        this.nurseForm.reset();
        this.submitted = false;
      },
      (error) => {
        console.error('Error adding nurse:', error);
        // Handle error as needed
      }
    );
  }

}
