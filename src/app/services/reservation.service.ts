import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private BASE_URL = "http://localhost:8080/reservations";
  // HttpClient: un module qui nous permet d'utiliser les verbes http : GET.POST,PUT et DELETE
  constructor(private httpClient:HttpClient) { }
  // findAll --> verbe http GET --> url : BASE_URL --> Récupération des données avec la méthode Observable
  // Afficher la liste des utilisateurs
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
   // save --> verbe http POST --> url : BASE_URL + Body (utilisateur)
   public save(reservation:Reservation):Observable<any>{
    return this.httpClient.post(this.BASE_URL,reservation);
  }
  // delete --> verbe http DELETE --> url : BASE_URL/id
  // http://localhost:8080/utilisateurs/5
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
}
