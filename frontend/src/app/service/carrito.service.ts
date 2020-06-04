import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  apiUrl = 'http://localhost:3000/api';

  constructor(private http:HttpClient) {

   }

   agregarAnimal(animalNuevo) {
    const params = JSON.stringify(animalNuevo);
    const options = {headers: new HttpHeaders({'Content-type': 'application/json'})};

    return this.http.post(this.apiUrl + 'agregaranimal', params, options).pipe(res => res);
   }
}
