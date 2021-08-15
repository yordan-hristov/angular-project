import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCarComponent } from './new-car/new-car.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RentedCarsComponent } from './rented-cars/rented-cars.component';
import { SavedCarsComponent } from './saved-cars/saved-cars.component';

import { isUserService as isUser } from '../core/guards/auth.guard';
import { isAdminService as isAdmin } from '../core/guards/auth.guard';


const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ isUser ],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'details'
            },
            {
                path: 'details',
                component: ProfileDetailsComponent
            },
            {
                path: 'change-password',
                component: PasswordChangeComponent
            },
            {
                path: 'rented',
                component: RentedCarsComponent
            },
            {
                path: 'saved',
                component: SavedCarsComponent
            },
            {
                path: 'add-car',
                component: NewCarComponent,
                canActivate: [isAdmin]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }