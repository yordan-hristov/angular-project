import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewCarComponent } from './new-car/new-car.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { SavedCarsComponent } from './saved-cars/saved-cars.component';
import { RentedCarsComponent } from './rented-cars/rented-cars.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDetailsComponent,
    PasswordChangeComponent,
    SavedCarsComponent,
    RentedCarsComponent,
    NewCarComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class UserModule { }
