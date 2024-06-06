<<<<<<< HEAD
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NurseService } from '../nurse.service';
import { NgFor } from '@angular/common';
import { StringifyOptions } from 'querystring';
import { Application } from '../application';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { EditNurseComponent } from '../edit-nurse/edit-nurse.component';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({

selector: 'app-nurse-page',

standalone: true,

imports: [RouterModule, NgFor, CommonModule, NgIf],

templateUrl: './application-search.component.html',

styleUrl: './application-search.component.css'

})


export class ApplicationSearchComponent {

  nurseArray: Application[] = [];
  selectedNurse: Application | null = null;
  showSidebar = false;
  editingMode = false; 


  nurseForm: FormGroup = this.formBuilder.group({
    id: [''], 
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router 
  ) { }



  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }



}
=======
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { NurseService } from '../nurse.service';
// import { NgFor } from '@angular/common';
// import { StringifyOptions } from 'querystring';
// import { Application } from '../application';
// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// import { Router } from '@angular/router';
// import { EditNurseComponent } from '../edit-nurse/edit-nurse.component';
// import { FormGroup } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { NgIf } from '@angular/common';
// import { ApplicationService } from '../application.service';

// @Component({

// selector: 'app-nurse-page',

// standalone: true,

// imports: [RouterModule, NgFor, CommonModule, NgIf],

// templateUrl: './application-search.component.html',

// styleUrl: './application-search.component.css'

// })


// export class ApplicationPageComponent {

//   nurseArray: Application[] = [];
//   selectedNurse: Application | null = null;
//   showSidebar = false;
//   editingMode = false; // Flag to track if in editing mode


//   nurseForm: FormGroup = this.formBuilder.group({
//     id: [''], // Assuming you have an ID field for the nurse
//     // other form fields here
//   });

//   constructor(
//     private formBuilder: FormBuilder,
//     private applicationService: ApplicationService,
//     private router: Router // Inject Router service
//   ) { }

//   ngOnInit(): void {
//     this.getNurses();
//   }


//   toggleSidebar(): void {
//     this.showSidebar = !this.showSidebar;
//   }


//   getNurses(): void {
//     this.applicationService.getNurses().subscribe(
//       (nurses) => {
//         this.nurseArray = nurses;
//       },
//       (error) => {
//         console.error('Error fetching nurses', error);
//       }
//     );
//   }
  
//   searchNurse(): void {
//     const query = (document.getElementById('searchBox') as HTMLInputElement).value.toLowerCase();
//     const professionFilter = (document.getElementById('professionFilter') as HTMLSelectElement).value;
//     const specialtyFilter = (document.getElementById('specialtyFilter') as HTMLSelectElement).value;
//     const statusFilter = (document.getElementById('statusFilter') as HTMLSelectElement).value;
  
//     this.nurseService.getNurses().pipe(
//       map(nurses => {
//         return nurses.filter(nurse => {
//           // Filter by name
//           const nameMatch = nurse.firstName.toLowerCase().includes(query) || nurse.lastName.toLowerCase().includes(query);
//           // Filter by profession
//           const professionMatch = professionFilter === '' || nurse.profession.toLowerCase() === professionFilter;
//           // Filter by specialty
//           const specialtyMatch = specialtyFilter === '' || nurse.specialty.toLowerCase() === specialtyFilter;
//           // Filter by status
//           const statusMatch = statusFilter === '' || nurse.lookingForWork === statusFilter;
  
//           return nameMatch && professionMatch && specialtyMatch && statusMatch;
//         });
//       })
//     ).subscribe(filteredNurses => {
//       this.nurseArray = filteredNurses;
//     });
//   }

//   showMoreInfo(nurse: Nurse): void {
//     this.selectedNurse = nurse;
//     this.showSidebar = true; // Controls the visibility of the sidebar
//   }

//   closeSidebar(): void {
//     this.selectedNurse = null;
//     this.showSidebar = false;
//   }

//   editNurse(nurseId: string) {
//     // Navigate to the editNurse route along with the nurse ID
//     this.router.navigate(['/editNurse', nurseId]);
//   }

//   askToApply() {
//     // Implementation of the method goes here
//     console.log('Ask to Apply clicked'); // Example implementation
//   }

// deleteNurse() {
//   if (confirm('Are you sure you want to delete this nurse?')) {
//     // Get nurse ID from the form or any other source
//     const nurseId = this.selectedNurse?.id; // Assuming there's an ID field in the form
//     // console.log(this.nurseForm.get('id')?.value);
//     if (nurseId) {
//       this.nurseService.deleteNurse(nurseId.toString()).subscribe(
//         () => {
//           console.log('Nurse deleted successfully');
//           // Optionally, reset the form or clear form fields
//         },
//         (error) => {
//           console.error('Error deleting nurse:', error);
//           // Handle error as needed
//         }
//       );
//     }
//   }
// }

// isNurse(): boolean {
//   // Check if localStorage is available
//   if (typeof localStorage !== 'undefined' && localStorage.getItem('role') ===  "nurse") {
//     // Retrieve user data from localStorage
//     return true;
   
//   }
//   return false; // Default to false if user data is not available or if the user's role is not "nurse"
// }
// }
>>>>>>> origin/main
