import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PetsvaritiesComponent } from './petsvarities/petsvarities.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from '@angular/router';
const appRoutes:Routes=[
  {
    path:"",component:HomeComponent
  },
  {
    path:"pets varieties",component:PetsvaritiesComponent
  },
  {
    path:"login",component:LoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PetsvaritiesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
