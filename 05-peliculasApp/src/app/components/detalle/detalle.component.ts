import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaDetalle, Cast } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DatalocalService } from 'src/app/services/datalocal.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id: string;

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];

  oculto = 150;
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };

  iconFavorito = 'star-outline';

  constructor(private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DatalocalService) { }

  ngOnInit() {
    //console.log(this.id);
    this.dataLocal.existePelicula( this.id)
      .then( existe => this.iconFavorito = (existe) ? 'star': 'start-half-outline');

    this.moviesService.getPeliculaDetalle(this.id)
      .subscribe(resp => {
        console.log(resp);

        this.pelicula = resp;

      })

    this.moviesService.getActoresPelicula(this.id)
      .subscribe(resp => {
        //console.log(resp);
        this.actores = resp.cast;

      })

  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    const existe = this.dataLocal.guardarPelicula(this.pelicula);
    this.iconFavorito = (existe) ? 'star': 'start-half-outline';

  }

}
