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

templateUrl: './nurse-page.component.html',

styleUrl: './nurse-page.component.css'

})


export class NursePageComponent {

  nurseArray: Nurse[] = [];
  selectedNurse: Nurse | null = null;
  showSidebar = false;
  editingMode = false;


  nurseForm: FormGroup = this.formBuilder.group({
    id: [''], 
  });

  constructor(
    private formBuilder: FormBuilder,
    private nurseService: NurseService,
    private router: Router 
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
  
  searchNurse(): void {
    const query = (document.getElementById('searchBox') as HTMLInputElement).value.toLowerCase();
    const professionFilter = (document.getElementById('professionFilter') as HTMLSelectElement).value;
    const specialtyFilter = (document.getElementById('specialtyFilter') as HTMLSelectElement).value;
    const statusFilter = (document.getElementById('statusFilter') as HTMLSelectElement).value;
  
    this.nurseService.getNurses().pipe(
      map(nurses => {
        return nurses.filter(nurse => {
          // Filter by name
          const nameMatch = nurse.firstName.toLowerCase().includes(query) || nurse.lastName.toLowerCase().includes(query);
          // Filter by profession
          const professionMatch = professionFilter === '' || nurse.profession.toLowerCase() === professionFilter;
          // Filter by specialty
          const specialtyMatch = specialtyFilter === '' || nurse.specialty.toLowerCase() === specialtyFilter;
          // Filter by status
          const statusMatch = statusFilter === '' || nurse.lookingForWork === statusFilter;
  
          return nameMatch && professionMatch && specialtyMatch && statusMatch;
        });
      })
    ).subscribe(filteredNurses => {
      this.nurseArray = filteredNurses;
    });
  }

  showMoreInfo(nurse: Nurse): void {
    this.selectedNurse = nurse;
    this.showSidebar = true; 
  }

  closeSidebar(): void {
    this.selectedNurse = null;
    this.showSidebar = false;
  }

  editNurse(nurseId: string) {
    this.router.navigate(['/editNurse', nurseId]);
  }

  askToApply() {
    console.log('Ask to Apply clicked'); 
  }

deleteNurse() {
  if (confirm('Are you sure you want to delete this nurse?')) {
    const nurseId = this.selectedNurse?.nurseId; 
    if (nurseId) {
      this.nurseService.deleteNurse(nurseId.toString()).subscribe(
        () => {
          console.log('Nurse deleted successfully');
        },
        (error) => {
          console.error('Error deleting nurse:', error);
        }
      );
    }
  }
}

isNurse(): boolean {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('role') ===  "nurse") {
    return true;
   
  }
  return false; 
}
}


  




/*getNurses(){
      this.nurseService.getNurses().subscribe((res) => {
      console.log(res)
      this.nurseArray = res;
      })
    }*/

  