import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
// Interpolation : du fichier ts ( oussama  = 'Bonjour') -> html ({{oussama}})  
oussama = 'Bonjour ';
personne = "Oussama AYARI";
msg = "Salut, je suis le property bindig!!!";
lastDate=new Date();
curr = 50;
// Property binding : du fichier ts --> html : [align] = "une variable"
alignement = "center"; // left | right | center
// Event Binding : du fichier html --> css : (click)="modifierPersonne()"
modifierPersonne(){
  this.personne = "Frédéric Chopin";
}
resetPersonne(){
  this.personne = "Oussama AYARI";
}
// Two-way Databinding
tel = 751051659;
}
