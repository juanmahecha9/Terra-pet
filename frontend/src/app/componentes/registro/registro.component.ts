import { Component, OnInit } from '@angular/core';
/* importar el modelo para que tenga acceso a el */
import { producto } from '../../models/producto';
/* importar el servicio para que el formulario tenga acceso a ellos */
import { productoService } from '../../service/producto.service'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public Producto: producto;
  public productosEncontrados: any = []; /* los datos encontrados los va a guardar en un array */

  /* guardamos el modelo en una variable publica, para poder entrar a sus caracteristicas */

  /* se hace una variable privada para que no todos tengan acceso a la informacion */
  constructor(private service: productoService) {
    /* crear el modelo del producto para que se limpie cada dato */
    this.Producto = new producto(); /* cada que se crea un producto, se crean nuevos modelos paa que no se sobreescribam los datos */

  }

  ngOnInit(): void {
  }


  formularioUp() {
    this.service.createData(this.Producto).subscribe((res: any) => {
      if (res.statusCode !== 200) {
        alert('Error creando data')
      } else {
        alert('Data creada...')
      }
    });
  }
}
