import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  readonly url = 'http://localhost:8001/api';

  /*comparacion de los datos con el esquema*/
  selectUser: Usuarios;
  usuario: Usuarios[];
  constructor(private http: HttpClient) { 
    this.selectUser = new Usuarios();
  }

  obtenerusuarios() {
    return this.http.get(this.url + '/new');
  }

}
