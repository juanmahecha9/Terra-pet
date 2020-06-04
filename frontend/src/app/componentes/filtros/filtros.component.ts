import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PhotoService } from '../../service/photo.service'
import { Photo } from '../../interfaces/Photo'

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private router: Router 
  ) { }

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


}
