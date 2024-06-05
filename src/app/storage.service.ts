import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

const TOKEN = "token";
const USER = "USER";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private authState = new BehaviorSubject<boolean>(this.hasToken());

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private hasToken(): boolean {
    return !!this.getToken();
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    console.log('Token stored:', localStorage.getItem('token')); 
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return window.localStorage.getItem('token');
    }
    return null;
  }

  getUserName(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const user = window.localStorage.getItem('user');
      return user ? JSON.parse(user).name : null;
    }
    return null;
  }

  saveUser(user: any): void {
  localStorage.setItem('user', JSON.stringify(user));
  console.log('User stored:', localStorage.getItem('user')); 
}

  signIn(token: string, user: any): void {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('user', JSON.stringify(user));
    this.authState.next(true);
  }

  signOut(): void {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    this.authState.next(false);
  }

  getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
  }

  setCurrentUser(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}