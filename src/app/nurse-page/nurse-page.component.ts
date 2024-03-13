import { Component } from '@angular/core';
import { NurseFormComponent } from '../nurse-form/nurse-form.component';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nurse-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nurse-page.component.html',
  styleUrl: './nurse-page.component.css'
})
export class NursePageComponent {
  
}
