import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRoutingModule } from './car-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CarListComponent } from './car-list/car-list.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CarDetailsComponent } from './car-details/car-details.component';



@NgModule({
  declarations: [
    SearchComponent,
    CarListComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    CarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
