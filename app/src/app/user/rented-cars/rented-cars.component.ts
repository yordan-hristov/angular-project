import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarService } from 'src/app/car/car.service';
import { ICar } from 'src/app/shared/interfaces/car';
import { UserService } from '../user.service';

@Component({
  selector: 'app-rented-cars',
  templateUrl: './rented-cars.component.html',
  styleUrls: ['./rented-cars.component.css']
})
export class RentedCarsComponent implements OnDestroy{
  rentedCars: [ICar] | undefined;
  userId: string = localStorage.getItem('id')!;
  changes: boolean = false;

  constructor(
    private carService: CarService,
    private userService: UserService
  ) {
    this.rentedCars = this.userService.user!.rentedCars;
  }

  removeCar(id: string, currentCar: HTMLElement): void {
    const data = {
      userId: this.userId,
      carId: id
    }

    this.changes = true;

    this.carService.updateCar('removeRented', data).subscribe({
      next: () => currentCar.style.display = 'none'
    });
  }

  ngOnDestroy(): void {
    if(!this.changes) { return; }

    this.userService.getUser(this.userId).subscribe();
  }

}
