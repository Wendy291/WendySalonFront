import { Prestation } from "./prestation";
import { Salon } from "./salon";

export class Reservation {
    idReservation!:number;
    date!:Date;
    salons!:Salon[];
    prestations!:Prestation[];
}
