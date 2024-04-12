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
  isCheckedIn: boolean = false;
  username: string = '';
  private authSubscription!: Subscription; // Definite Assignment Assertion

  constructor(
    private storageService: StorageService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.storageService.getAuthState().subscribe(isAuthenticated => {
      this.isCheckedIn = isAuthenticated;
      if (this.isCheckedIn && isPlatformBrowser(this.platformId)) {
        this.username = this.storageService.getUserName() || '';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  signOut(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.storageService.signOut();
      this.router.navigateByUrl('/');
    }
  }
  logoURL: string ='assets/KhallLogo1.png';
}
