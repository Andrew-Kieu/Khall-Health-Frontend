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