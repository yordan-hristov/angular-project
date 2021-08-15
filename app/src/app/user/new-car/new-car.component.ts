import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from 'src/app/car/car.service';
import { isAllowed } from 'src/app/shared/custom-validators/new-car.';
import { setInputBorderColor } from 'src/app/shared/utils/inputBorderColor';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent {
  form: FormGroup;
  message: string | undefined;
  setInputBorderColor = setInputBorderColor;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
  ) {
    this.form = this.fb.group({
      location: ['',[Validators.required]],
      brand: ['',[Validators.required, isAllowed()]],
      model: ['',[Validators.required]],
      year: ['',[Validators.required, Validators.pattern(/^[0-9]{4}$/),Validators.min(2000), Validators.max(2021)]],
      transmission: ['',[Validators.required, Validators.pattern(/^manual$|^automatic$/)]],
      hp: ['',[Validators.required, Validators.pattern(/[0-9]/)]],
      doors: ['',[Validators.required, Validators.pattern(/[2-6]{1}/)]],
      seats: ['',[Validators.required, Validators.pattern(/[2-6]{1}/)]],
      fuel: ['',[Validators.required, Validators.pattern(/^diesel$|^petrol$/)]],
      price: ['',[Validators.required, Validators.pattern(/[0-9]/)]],
      img: ['',[Validators.required]]
    })

  }

  onSubmit(): void {
    if(this.form.invalid){ return; }

    const data = this.form.value;

    this.carService.createCar(data).subscribe({
      next: () => {
        this.message = 'Car successfully created!';
        this.form.reset();
      }
    })
  }


}
