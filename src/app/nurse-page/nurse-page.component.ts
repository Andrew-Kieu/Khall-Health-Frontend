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

  constructor(private nurseService: NurseService) {}

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

  editNurse(): void {
    // Logic for editing a nurse
  }

  deleteNurse(): void {
    // Logic for deleting a nurse
  }

  askToApply(): void {
    // Logic for asking to apply
  }
}
    




/*getNurses(){
      this.nurseService.getNurses().subscribe((res) => {
      console.log(res)
      this.nurseArray = res;
      })
    }*/