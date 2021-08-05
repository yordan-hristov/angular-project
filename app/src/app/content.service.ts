import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ICar } from './shared/interfaces/car';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  loadCars(){
    return this.http.get<ICar[]>(`${API_URL}/cars`, {withCredentials: true});
  }
}
