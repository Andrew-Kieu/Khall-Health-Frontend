import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './tools-page.component.html',
  styleUrl: './tools-page.component.css'
})
export class ToolsPageComponent {
  imageUrlPic1: string = 'assets/property1.jpg';
  imageUrlPic2: string = 'assets/property2.jpg';
  imageUrlPic3: string = 'assets/property3.jpg';
}