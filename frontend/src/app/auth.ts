import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'https://jonnyfsunday22.pythonanywhere.com/api/';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: {username: string, password: string}): Observable<any> {
    return this.http.post(this.apiUrl + 'token/', credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.access);
      }),
      catchError((err) => {
        console.log('Login error:', err);
        return throwError(() => err);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
