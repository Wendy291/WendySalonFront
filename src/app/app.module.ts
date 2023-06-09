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
import { AvisService } from './services/avis.service';
import { ReservationService } from './services/reservation.service';
import { AvisComponent } from './avis/avis.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SalonComponent } from './salon/salon.component';
import { PrestationComponent } from './prestation/prestation.component';


@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    RoleComponent,
    AvisComponent,
    ReservationComponent,
    SalonComponent,
    PrestationComponent,
    MyDirectiveDirective,
    SqrtPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // [(ngModel)] : Two-way DataBinding
    HttpClientModule // Pour utiliser les verbes http : GET,POST, PUT,DELETE
  ],

  bootstrap: [AppComponent],
  providers: [UtilisateurService, AvisService, ReservationService]
})
export class AppModule { }
