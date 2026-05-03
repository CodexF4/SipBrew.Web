import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = 'http://localhost:5230/api';

  constructor(private http: HttpClient) {}
  

  login(data: any): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, data).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', 'admin'); // assuming only admin can login
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get role(): string | null {
    return localStorage.getItem('role');
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }

  get isAdmin(): boolean {
    return this.role === 'admin';
  }
}