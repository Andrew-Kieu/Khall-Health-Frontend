import { Component } from '@angular/core';
import { NurseFormComponent } from '../nurse-form/nurse-form.component';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NurseService } from '../nurse.service';
import { NgFor } from '@angular/common';
import { StringifyOptions } from 'querystring';
import { Nurse } from '../nurse';
import { CommonModule } from '@angular/common';
  

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

    constructor (private nurseService: NurseService){

    this.getNurses();
    this.selectedNurse = null;

    }

      

    getNurses(){

    this.nurseService.getNurses().subscribe((res) => {

    console.log(res)

    this.nurseArray = res;

    })
    }

    
    showMoreInfo(nurse: Nurse): void {
      this.selectedNurse = nurse;
    }

}