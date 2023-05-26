import { Component } from '@angular/core';
import { Role } from '../models/role';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers : []
})
export class RoleComponent {
  users!:any[]; // any : n'importe quel type de données
  user:Role= new Role();
  // DI : par constructeur  
  constructor(private roleService:RoleService){
  }
  ngOnInit(): void {
    this.findAllRoles;
  }
  findAllRoles(){
    // () --> a + b
    // data = données qui se trouvent dans le cache du navigateur
    this.roleService.findAll().subscribe(data => {this.users= data});

  }
  saveRole(){
    this.roleService.save(this.user).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        this.findAllRoles();
        // Vider le formulaire
        this.user = new Role();
        
      }
    )
  }
  deleteUtilisateur(id:number){
    this.roleService.delete(id).subscribe(
      () => {
        this.findAllRoles();
      }
    )
  }
}

