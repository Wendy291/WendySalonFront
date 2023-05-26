import { Component, OnInit } from '@angular/core';
import { Avis } from '../models/avis';
import { AvisService } from '../services/avis.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
  providers: []
})
export class AvisComponent implements OnInit{
 // Déclaration d'un tableau d'utilisateurs
  // ! : le tableau n'est pas initialisé
  users!:any[]; // any : n'importe quel type de données
  user:Avis= new Avis();

  // DI : par constructeur  
  constructor(private avisService:AvisService){
  }
  ngOnInit(): void {
    this.findAllAvis();
  }

  findAllAvis(){
    // () --> a + b
    // data = données qui se trouvent dans le cache du navigateur
    this.avisService.findAll().subscribe(data => {this.user = data});

  }
  saveAvis(){
    this.avisService.save(this.user).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        this.findAllAvis();
        // Vider le formulaire
        this.user = new Avis();
        
      }
    )
  }
  deleteAvis(id:number){
    this.avisService.delete(id).subscribe(
      () => {
        this.findAllAvis();
      }
    )
  }

}
