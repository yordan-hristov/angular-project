import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ICar } from '../shared/interfaces/car';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: ICar[] | null = null;

  constructor(private http: HttpClient) { }

  fetchCars(params: {location: string, brand: string}){
    const query = `?location=${params.location}&brand=${params.brand}`
    return this.http.get<ICar[]>(`${API_URL}/cars/${query}`, {withCredentials: true}).pipe(
      tap(cars => this.cars = cars)
    );
  }

  fetchCar(id: string){
    return this.http.get<ICar>(`${API_URL}/cars/${id}`, {withCredentials: true});
  }

  updateCar(action: string, data: { userId: string, carId: string}){
    return this.http.patch(`${API_URL}/cars/${data.carId}/${action}`, data , {withCredentials:true});
  }

  createCar(data: ICar){
    return this.http.post(`${API_URL}/cars`, data, {withCredentials: true});
  }
}
