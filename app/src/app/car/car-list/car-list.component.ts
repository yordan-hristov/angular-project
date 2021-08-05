import { Component} from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { ICar } from 'src/app/shared/interfaces/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent{
  cars: ICar[] | undefined;
  

  constructor(
    private contentService: ContentService
  ) {
    this.getCars();
   }

  getCars(): void {
    this.cars = undefined;
    this.contentService.loadCars().subscribe(cars => this.cars = cars);
  }

}
