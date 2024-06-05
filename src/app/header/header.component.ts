import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StorageService } from '../storage.service';
import { isPlatformBrowser } from '@angular/common';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  user: any = {}; 

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
       const storedInfo = localStorage.getItem('role');
  
      if (storedInfo) {
        
        this.isAuthenticated = true;
  
      }
    }
  }
  

  getUserDisplayName(): string {
    console.log('User role:', this.user.role);
  
    if (localStorage.getItem("role") === 'nurse') {
      const firstName = localStorage.getItem('firstName');
      const lastName = localStorage.getItem('lastName');
  
      if (firstName && lastName) {
        console.log('Nurse display name:', `${firstName} ${lastName}`);
        return `${firstName} ${lastName}`;
      } else {
        console.log('First name or last name not found in localStorage');
        return ''; 
      }
    } else if (localStorage.getItem('role') === 'hospital') {
      const hospitalName = localStorage.getItem('hospitalName')
      if (hospitalName) {
        console.log('Hospital name:', hospitalName);
        return hospitalName;
      } else {
        console.log('Hospital name not found in user object');
        return ''; 
      }
    } else {
      console.log('Unknown role');
      return ''; 
    }
  }
  
  

  signOut(): void {

    localStorage.clear();
    this.isAuthenticated = false;
    this.router.navigateByUrl('/');
  }

  logoURL: string = 'assets/KhallLogo1.png';
}
