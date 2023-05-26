import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AvisComponent } from './avis/avis.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {
    path:'utilisateur', // localhost:4200/utilisateur
    component:UtilisateurComponent
  },

  {
    path:'avis', // localhost:4200/utilisateur
    component:AvisComponent
  },

  {
    path:'reservation', // localhost:4200/utilisateur
    component:ReservationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
