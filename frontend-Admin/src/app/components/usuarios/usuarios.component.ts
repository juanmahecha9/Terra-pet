import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service'
import { Usuarios } from 'src/app/models/usuarios';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private user: UsuariosService
    ) { }

  ngOnInit() {
 
  }



}
