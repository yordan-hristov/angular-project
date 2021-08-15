import { Component} from '@angular/core';
import { ICar } from 'src/app/shared/interfaces/car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent{
  cars: ICar[] | null;
  
  constructor(
    private carService: CarService
  ) {
    this.cars = this.carService.cars;
  }

}
