import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogged(): boolean {
    return Boolean(localStorage.getItem('username'))
  }

  constructor(private http: HttpClient) { }

  register(data: { username: string; email: string; password: string }) {
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
  }

  clearLocalStorage(){
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
  }

  setInputBorderColor(form: FormGroup, name: string): object | null {
    let invalid: boolean = false;
    if(form.get(name)?.touched){
      if(name == 'rePassword' && form.hasError('notMatching') || form.get(name)?.invalid){
        invalid = true;
      }
      return invalid ? {'border-color': 'red'} : {'border-color': 'green'}
    }

    return null;
  }
}
