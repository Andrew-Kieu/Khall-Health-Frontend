import { Component } from '@angular/core';
import { NurseFormComponent } from '../nurse-form/nurse-form.component';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NurseService } from '../nurse.service';
import { NgFor } from '@angular/common';
import { StringifyOptions } from 'querystring';
import { Nurse } from '../nurse';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EditNurseComponent } from '../edit-nurse/edit-nurse.component';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({

selector: 'app-nurse-page',

standalone: true,

imports: [RouterModule, NgFor, CommonModule],

templateUrl: './nurse-page.component.html',

styleUrl: './nurse-page.component.css'

})


export class NursePageComponent {

  nurseArray: Nurse[] = [];
  selectedNurse: Nurse | null = null;
  showSidebar = false;
  editingMode = false; // Flag to track if in editing mode


  nurseForm: FormGroup = this.formBuilder.group({
    id: [''], // Assuming you have an ID field for the nurse
    // other form fields here
  });

  constructor(
    private formBuilder: FormBuilder,
    private nurseService: NurseService,
    private router: Router // Inject Router service
  ) { }

  ngOnInit(): void {
    this.getNurses();
  }


  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }


  getNurses(): void {
    this.nurseService.getNurses().subscribe(
      (nurses) => {
        this.nurseArray = nurses;
      },
      (error) => {
        console.error('Error fetching nurses', error);
      }
    );
  }


  showMoreInfo(nurse: Nurse): void {
    this.selectedNurse = nurse;
    this.showSidebar = true; // Controls the visibility of the sidebar
  }

  closeSidebar(): void {
    this.selectedNurse = null;
    this.showSidebar = false;
  }

  editNurse(nurseId: string) {
    // Navigate to the editNurse route along with the nurse ID
    this.router.navigate(['/editNurse', nurseId]);
  }

  askToApply() {
    // Implementation of the method goes here
    console.log('Ask to Apply clicked'); // Example implementation
  }

deleteNurse() {
  if (confirm('Are you sure you want to delete this nurse?')) {
    // Get nurse ID from the form or any other source
    const nurseId = this.selectedNurse?.id; // Assuming there's an ID field in the form
    // console.log(this.nurseForm.get('id')?.value);
    if (nurseId) {
      this.nurseService.deleteNurse(nurseId.toString()).subscribe(
        () => {
          console.log('Nurse deleted successfully');
          // Optionally, reset the form or clear form fields
        },
        (error) => {
          console.error('Error deleting nurse:', error);
          // Handle error as needed
        }
      );
    }
  }
}
}


  




/*getNurses(){
      this.nurseService.getNurses().subscribe((res) => {
      console.log(res)
      this.nurseArray = res;
      })
    }*/

  