import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | undefined;

  constructor(private http: HttpClient) { }

  getUser(id: string) {
    return this.http.get<IUser>(`${API_URL}/user/${id}`, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    )
  }

  changePassword(id: string, data: {oldPassword: string, password: string}) {
    return this.http.patch(`${API_URL}/user/${id}`, data, { withCredentials: true })
  }
}
