import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PhotoService } from '../../services/photo.service'
import { Photo } from '../../interfaces/Photo'
import {productoService } from '../../services/producto.service'
import {AuthService } from '../../services/auth.service'
import {producto } from '../../models/producto'
@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  public Producto: producto;
  public productosEncontrados: any = []; /* los datos encontrados los va a guardar en un array */
user={};
  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private service: productoService,
    private authService: AuthService
    
  ) { this.Producto = new producto(); }

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(
        res => {
          this.photos = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id]);
  }

  actualizar() {
    alert('Gracias por participar en este proceso de adopcion \n Poximamente nos pondremos en contacto contigo para poder \n continuar el proceso de se favorable tu solicitud \n  🐶🐱 🐶🐱 🐶🐱 🐶🐱')
    
  }
 

 
}
