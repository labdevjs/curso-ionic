import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  peliculas: Pelicula[] = [];
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella'];
  buscando = false;

  constructor(private movieService: MoviesService,
              private modalCtrl: ModalController) { }

  buscar(event) {
    const valor: string = event.detail.value;
    //console.log(valor);

    if (valor.length === 0) {
      this.peliculas = [];
      return;
    }

    this.buscando = true;
    this.movieService.buscarPelicula(valor)
      .subscribe(resp => {
        console.log(resp);
        this.peliculas = resp['results'];
        this.buscando = false;
      });

  }

  buscarIdeas(idea: string) {
    this.textoBuscar = idea;
  }


  async detalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
