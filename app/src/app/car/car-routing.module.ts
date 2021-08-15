import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarListComponent } from './car-list/car-list.component';
import { SearchComponent } from './search/search.component';
import { isNavigatedService as isNavigated } from '../core/guards/is-navigated.guards';

const routes: Routes = [
    {
        path: 'cars',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: SearchComponent
          },
          {
            path: 'cars-list',
            pathMatch: 'full',
            component: CarListComponent,
            canActivate: [isNavigated]
          },
          {
            path: ':carId',
            component: CarDetailsComponent
          }
        ]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }