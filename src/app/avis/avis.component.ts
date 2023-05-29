import { Component, OnInit } from '@angular/core';
import { Avis } from '../models/avis';
import { AvisService } from '../services/avis.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
  providers: []
})
export class AvisComponent implements OnInit{
 // Déclaration d'un tableau d'utilisateurs
  // ! : le tableau n'est pas initialisé
  users!:any[];
  utilisateurs!:any[]; // any : n'importe quel type de données
  user:Avis= new Avis();

  // DI : par constructeur  
  constructor(private avisService:AvisService,private utilisateurService:UtilisateurService){
  }
  ngOnInit(): void {
    this.findAllAviss();
    this.findAllUtilisateurs();
  }

  findAllAviss(){
    // () --> a + b
    // data = données qui se trouvent dans le cache du navigateur
    this.avisService.findAll().subscribe(data => {this.user = data});

  }
  findAllUtilisateurs(){
    // () --> a + b
    // data = données qui se trouvent dans le cache du navigateur
    this.utilisateurService.findAll().subscribe(data => {this.utilisateurs= data});

  }
  saveAvis(){
    this.avisService.save(this.user).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        this.findAllAviss();
        // Vider le formulaire
        this.user = new Avis();
        
      }
    )
  }
  deleteAvis(id:number){
    this.avisService.delete(id).subscribe(
      () => {
        this.findAllAviss();
      }
    )
  }

}
