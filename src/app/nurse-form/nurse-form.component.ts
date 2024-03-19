import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-nurse-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nurse-form.component.html',
  styleUrl: './nurse-form.component.css'
})
export class NurseFormComponent {

  submitForm(form: NgForm) {
    // Your form submission logic goes here
    console.log('Form submitted:', form.value);
    // You can also reset the form after submission if needed
    form.resetForm();
  }
}
