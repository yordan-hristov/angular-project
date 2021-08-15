import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | undefined;

  constructor(private http: HttpClient) { }

  register(data: { username: string; email: string; number: string; password: string }) {
    return this.http.post<IUser>(`${apiUrl}/auth/register`, data, { withCredentials: true }).pipe(
      tap((user) => this.updateLocalStorage(user))
    );
  }

  login(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${apiUrl}/auth/login`, data, { withCredentials: true}).pipe(
      tap((user) => this.updateLocalStorage(user))
    );
  }

  logout() {
    return this.http.post(`${apiUrl}/auth/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.clearLocalStorage())
    );
  }

  updateLocalStorage(user: IUser){
    localStorage.setItem('username', user.username);
    localStorage.setItem('email', user.email);
    localStorage.setItem('id', user.id);
    localStorage.setItem('role', user.role);
  }

  clearLocalStorage(){
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
  }
}
