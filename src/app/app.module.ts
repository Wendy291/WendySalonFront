import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RoleComponent } from './role/role.component';
import { FormsModule } from '@angular/forms';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { UtilisateurService } from './services/utilisateur.service';
import {HttpClientModule} from '@angular/common/http';
import { SalonComponent } from './salon/salon.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationService } from './services/reservation.service';
import { SalonService } from './services/salon.service';
import { RoleService } from './services/role.service';
@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    RoleComponent,
    MyDirectiveDirective,
    SqrtPipe,
    SalonComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // [(ngModel)] : Two-way DataBinding
    HttpClientModule // Pour utiliser les verbes http : GET,POST, PUT,DELETE
  ],
  providers: [UtilisateurService, ReservationService,SalonService,RoleService], // Les services
  bootstrap: [AppComponent]
})
export class AppModule { }
