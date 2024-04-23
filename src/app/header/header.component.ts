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
  user: any = {}; // Placeholder for user data

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Check if localStorage is available (only in browser environment)
    if (isPlatformBrowser(this.platformId)) {
      // Retrieve user data from localStorage
       const storedInfo = localStorage.getItem('role');
  
      if (storedInfo) {
        // Parse the stored user data from JSON
        // this.user = JSON.parse(storedInfo);
        // Set isAuthenticated to true
        this.isAuthenticated = true;
  
        // console.log('User data:', this.user);
      }
    }
  }
  

  getUserDisplayName(): string {
    console.log('User role:', this.user.role);
  
    // Check if user's role is nurse or hospital
    if (localStorage.getItem("role") === 'nurse') {
      // Retrieve first name and last name separately from localStorage
      const firstName = localStorage.getItem('firstName');
      const lastName = localStorage.getItem('lastName');
  
      // Check if first name and last name are available
      if (firstName && lastName) {
        console.log('Nurse display name:', `${firstName} ${lastName}`);
        return `${firstName} ${lastName}`;
      } else {
        console.log('First name or last name not found in localStorage');
        return ''; // Handle the case where first name or last name is not available
      }
    } else if (localStorage.getItem('role') === 'hospital') {
      // Retrieve hospital name from user object
      const hospitalName = localStorage.getItem('hospitalName')
      if (hospitalName) {
        console.log('Hospital name:', hospitalName);
        return hospitalName;
      } else {
        console.log('Hospital name not found in user object');
        return ''; // Handle the case where hospital name is not available
      }
    } else {
      console.log('Unknown role');
      return ''; // Handle other roles if needed
    }
  }
  
  

  signOut(): void {
    // Clear user data from localStorage and navigate to sign-in page
    // localStorage.removeItem('currentUser');
    localStorage.clear();
    this.isAuthenticated = false;
    this.router.navigateByUrl('/');
  }

  logoURL: string = 'assets/KhallLogo1.png';
}
//   isCheckedIn: boolean = false;
//   username: string = '';
//   private authSubscription!: Subscription; // Definite Assignment Assertion

//   constructor(
//     private storageService: StorageService,
//     private router: Router,
//     @Inject(PLATFORM_ID) private platformId: Object
//   ) {}

//   ngOnInit(): void {
//     this.authSubscription = this.storageService.getAuthState().subscribe(isAuthenticated => {
//       this.isCheckedIn = isAuthenticated;
//       if (this.isCheckedIn && isPlatformBrowser(this.platformId)) {
//         this.username = this.storageService.getUserName() || '';
//       }
//     });
//   }

//   ngOnDestroy(): void {
//     if (this.authSubscription) {
//       this.authSubscription.unsubscribe();
//     }
//   }

//   signOut(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       this.storageService.signOut();
//       this.router.navigateByUrl('/');
//     }
//   }
//   logoURL: string ='assets/KhallLogo1.png';
// }
