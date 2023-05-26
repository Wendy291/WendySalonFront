import { Component } from '@angular/core';
import { Salon } from '../models/salon';
import { SalonService } from '../services/salon.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css'],
  providers : []

})
export class SalonComponent {
  users!:any[]; // any : n'importe quel type de données
  user:Salon= new Salon();
  // DI : par constructeur  
  constructor(private salonService:SalonService){
  }
  ngOnInit(): void {
    this.findAllSalons;
  }
  findAllSalons(){
    // () --> a + b
    // data = données qui se trouvent dans le cache du navigateur
    this.salonService.findAll().subscribe(data => {this.users= data});

  }
  saveSalon(){
    this.salonService.save(this.user).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        this.findAllSalons();
        // Vider le formulaire
        this.user = new Salon();
        
      }
    )
  }
  deleteUtilisateur(id:number){
    this.salonService.delete(id).subscribe(
      () => {
        this.findAllSalons();
      }
    )
  }
}
