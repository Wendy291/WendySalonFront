import { Salon } from "./salon";

export class Reservation {
    idReservation!:number;
    date!:Date;
    salons!:Salon[];
    prestations!:Prestation[];
}
