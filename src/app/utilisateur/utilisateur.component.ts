import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
  providers: [] // Les services
})
export class UtilisateurComponent implements OnInit{
  // Déclaration d'un tableau d'utilisateurs
  // ! : le tableau n'est pas initialisé
  users!:any[]; // any : n'importe quel type de données
  user:Utilisateur= new Utilisateur();
  // DI : par constructeur  
  constructor(private utilisateurService:UtilisateurService){
  }
  ngOnInit(): void {
    this.findAllUtilisateurs();
  }
  findAllUtilisateurs(){
    // () --> a + b
    // data = données qui se trouvent dans le cache du navigateur
    this.utilisateurService.findAll().subscribe(data => {this.users = data});

  }
  saveUtilisateur(){
    this.utilisateurService.save(this.user).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        this.findAllUtilisateurs();
        // Vider le formulaire
        this.user = new Utilisateur();
        
      }
    )
  }
  deleteUtilisateur(id:number){
    this.utilisateurService.delete(id).subscribe(
      () => {
        this.findAllUtilisateurs();
      }
    )
  }
}
