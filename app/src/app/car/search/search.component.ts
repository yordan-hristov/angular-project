import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setInputBorderColor } from 'src/app/shared/utils/inputBorderColor';
import { CarService } from '../car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  form: FormGroup;
  setInputBorderColor = setInputBorderColor
  
  constructor(
    private router: Router,
    private carService: CarService,
    private fb: FormBuilder
    ) {
      this.form = this.fb.group({
        location: ['', Validators.required],
        brand: ['', Validators.required]
      })
    }
    
    onSubmit(){
      if(this.form.invalid){ return; }

      const location = this.form.get('location')?.value;
      const brand = this.form.get('brand')?.value;

      this.carService.fetchCars({location, brand}).subscribe({
        next: () => this.router.navigate(['cars','cars-list'])
      });
    }
    
}
