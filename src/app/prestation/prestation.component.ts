import { Component } from '@angular/core';
import { Prestation } from '../models/prestation';
import { PrestationService } from '../services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.css'],
  providers: []
})
export class PrestationComponent {
 // Déclaration d'un tableau d'utilisateurs
  // ! : le tableau n'est pas initialisé
  users!:any[]; // any : n'importe quel type de données
  user:Prestation= new Prestation();

  // DI : par constructeur  
  constructor(private prestationService:PrestationService){
  }
  ngOnInit(): void {
    this.findAllPrestation();
  }

  findAllPrestation(){
    // () --> a + b
    // data = données qui se trouvent dans le cache du navigateur
    this.prestationService.findAll().subscribe(data => {this.user = data});

  }
  savePrestation(){
    this.prestationService.save(this.user).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        this.findAllPrestation();
        // Vider le formulaire
        this.user = new Prestation();
        
      }
    )
  }
  deletePrestation(id:number){
    this.prestationService.delete(id).subscribe(
      () => {
        this.findAllPrestation();
      }
    )
  }
}
