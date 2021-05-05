import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella'];

  constructor(private movieService: MoviesService) { }

  buscar(event) {
    const valor = event.detail.value;
    console.log(valor);
    this.movieService.buscarPelicula(valor)
      .subscribe(resp => {
        console.log(resp);
      });

  }

  buscarIdeas(idea: string) {
    this.textoBuscar = idea;
  }

}
