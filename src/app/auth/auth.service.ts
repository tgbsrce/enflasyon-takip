import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginResponse, User } from '../models/filters.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  tokenKey = 'token';
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  get token() {
    return localStorage.getItem(this.tokenKey);
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private http: HttpClient) {
    if (this.token) {
      this.loggedIn.next(true);
    }
  }

  login(user: User): void {
    this.http
      .post<LoginResponse>('https://it-vis.herokuapp.com/login', user)
      .subscribe((res) => {
        localStorage.setItem(this.tokenKey, res.token);
        this.loggedIn.next(true);
        this.router.navigate(['/admin']);
      });
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
