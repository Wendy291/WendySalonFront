import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: []
})
export class ReservationComponent implements OnInit{
  users!:any[]; // any : n'importe quel type de données
  user:Reservation= new Reservation();
  // DI : par constructeur  
  constructor(private reservationService:ReservationService){
  }
  ngOnInit(): void {
    this.findAllReservations();
  }
  findAllReservations(){
    // () --> a + b
    // data = données qui se trouvent dans le cache du navigateur
    this.reservationService.findAll().subscribe(data => {this.users= data});

  }
  saveReservation(){
    this.reservationService.save(this.user).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        this.findAllReservations();
        // Vider le formulaire
        this.user = new Reservation();
        
      }
    )
  }
  deleteReservation(id:number){
    this.reservationService.delete(id).subscribe(
      () => {
        this.findAllReservations();
      }
    )
  }
}

