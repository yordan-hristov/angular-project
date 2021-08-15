import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from './register/register.component';
import { isGuestService as isGuest } from '../core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [isGuest]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [isGuest]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }