import { Component, OnDestroy} from '@angular/core';
import { CarService } from 'src/app/car/car.service';
import { ICar } from 'src/app/shared/interfaces/car';
import { UserService } from '../user.service';

@Component({
  selector: 'app-saved-cars',
  templateUrl: './saved-cars.component.html',
  styleUrls: ['./saved-cars.component.css']
})
export class SavedCarsComponent implements OnDestroy{
  savedCars: [ICar] | undefined;
  userId: string = localStorage.getItem('id')!;
  changes: boolean = false;

  constructor(
    private carService: CarService,
    private userService: UserService
  ) {
    this.savedCars = this.userService.user!.savedCars;
   }

   removeCar(id: string, currentCar: HTMLElement): void {
    const data = {
      userId: this.userId,
      carId: id
    }

    this.changes = true;

    this.carService.updateCar('removeSaved', data).subscribe({
      next: () => currentCar.style.display = 'none'
    });
  }

  ngOnDestroy(): void {
    if(!this.changes) { return; }

    this.userService.getUser(this.userId).subscribe();
  }
}
