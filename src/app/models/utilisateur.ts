import { Avis } from "./avis";
import { Role } from "./role";

export class Utilisateur {
    idUtilisateur!:number;
    nomUtilisateur!:string;
    prenomUtilisateur!:string;
    username!:string;
    password!:string;
    roles!:Role[];
    avis!:Avis[];
    reservation:Reservation[];
}
