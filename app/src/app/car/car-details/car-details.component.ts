import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICar } from 'src/app/shared/interfaces/car';
import { setInputBorderColor } from 'src/app/shared/utils/inputBorderColor';
import { CarService } from '../car.service';
import { notBeforeToday, notBeforePickUp } from 'src/app/shared/custom-validators/car-search';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: ICar | undefined;
  carId: string = this.activatedRoute.snapshot.params.carId;
  userId: string | null = localStorage.getItem('id');
  form: FormGroup;
  setInputBorderColor = setInputBorderColor;


  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.getCar();

    this.form = this.fb.group({
      startDate: ['', [Validators.required, notBeforeToday()]],
      returnDate: [{value: '',disabled: true}, [Validators.required, notBeforePickUp()]]
    })
  }

  ngOnInit(): void {
    this.form.get('startDate')?.statusChanges.subscribe({
      next: () => {
        if(this.form.get('startDate')?.valid){
          this.form.get('returnDate')?.enable();
        }else{
          this.form.get('returnDate')?.disable();

        }
      }
    })
  }

  getCar(): void {
    this.car = undefined;
    this.carService.fetchCar(this.carId).subscribe(car => this.car = car);
  }

  saveCar(): void {
    const data = {
      userId: this.userId!,
      carId: this.carId
    }

    this.carService.updateCar('save', data).subscribe({
      next: () => this.getCar()
    })
  }

  onSubmit(){
    if(this.form.invalid){ return; }

    const data = {
      userId: this.userId!,
      carId: this.carId
    }

    this.carService.updateCar('rent', data).subscribe({
      next: () => this.getCar()
    })
  }

  shouldShow(action: string): boolean {
    if (action == 'rent') {
      return !this.car!.rentedBy.includes(this.userId!);
    } else {
      return !this.car!.savedBy.includes(this.userId!);
    }
  }
}
