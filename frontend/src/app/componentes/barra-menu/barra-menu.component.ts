import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.scss']
})
export class BarraMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(barra) {
    if (barra.style.animationName == 'muestraMenu') {
      barra.style.animationName = 'ocultaMenu';
    } else if (barra.style.animationName == 'ocultaMenu' || barra.style.animationName == '') {
      barra.style.animationName = 'muestraMenu';
    }

    console.log(barra.style.animationName);
  }
  

}
