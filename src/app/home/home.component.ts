import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imageURL: string ='assets/groupN.jpg';
  houseURL: string='assets/house.png';
  bellURL: string ='assets/bell.png';
  mglassURL: string ='assets/mglass.png';
  horizonURL: string ='assets/horizon.jpg';
}
