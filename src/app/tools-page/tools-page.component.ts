import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './tools-page.component.html',
  styleUrl: './tools-page.component.css'
})
export class AboutComponent {
  imageUrlLeonard: string = 'assets/Leonard.png';
  imageUrlAndrew: string = 'assets/AndrewDog.png';
  imageUrlKobi: string = 'assets/Kobi.png';
  imageUrlHayden: string = 'assets/Hayden.png';
  imageUrlLucas: string = 'assets/LucasDog.png';

}