import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarModule } from './car/car.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { isGuestService, isUserService, isAdminService } from './core/guards/auth.guard';
import { isNavigatedService } from './core/guards/is-navigated.guards';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    CarModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    isGuestService,
    isUserService,
    isAdminService,
    isNavigatedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
