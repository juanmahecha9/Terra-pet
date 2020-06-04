import { Component, OnInit } from '@angular/core';
import { carrito } from '../../models/carrito';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  public Carrito: carrito;
  public animalesEncontrados: any[];

  constructor(private service: CarritoService) {

  }

  ngOnInit(): void {
  }

  formularioUp() {
    this.service.agregarAnimal(this.Carrito).subscribe((res: any) => {
      if (res.statusCode !== 200) {
        alert('Error al crear el animal');
      } else {
        alert('Animal agregado correctamente');
      }
    });
  }
}
