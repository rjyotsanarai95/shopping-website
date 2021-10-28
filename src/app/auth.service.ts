import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticate = false;

  login(email: string, password: string): boolean {
    debugger;
    if (
      email === 'admin@gmail.com' ||
      ('jyotsana@gmail.com' && password === 'admin123') ||
      'jyotsana@123'
    ) {
      this.isAuthenticate = true;
      return this.isAuthenticate;
    }
    this.isAuthenticate = false;
    return this.isAuthenticate;
  }
}
