import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaDetalle } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id: string;

  pelicula: PeliculaDetalle = {};

  constructor( private moviesService: MoviesService) { }

  ngOnInit() {
    console.log(this.id);

    this.moviesService.getPeliculaDetalle(this.id)
      .subscribe( resp => {
        console.log(resp);

        this.pelicula = resp;

      })

      this.moviesService.getActoresPelicula(this.id)
        .subscribe( resp => {
          //console.log(resp);

        })

  }

}
