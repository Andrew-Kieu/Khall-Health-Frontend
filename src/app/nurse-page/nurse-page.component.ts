import { Component } from '@angular/core';
import { NurseFormComponent } from '../nurse-form/nurse-form.component';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NurseService } from '../nurse.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nurse-page',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './nurse-page.component.html',
  styleUrl: './nurse-page.component.css'
})
export class NursePageComponent {
  
  nurseArray?: []; 
  nurseArryay: Array<{ nurse: string }> = [];

  
  constructor (private nurseService: NurseService){
    this.getNurses();
  }

  getNurses(){
    this.nurseService.getNurses().subscribe((res) => {
      console.log(res)
      this.nurseArray = res;
    })
  }
  
}
