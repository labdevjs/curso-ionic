import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements AfterViewInit {

  @ViewChild(IonSegment) segment: IonSegment;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngAfterViewInit(): void {
    this.segment.value = this.categorias[0];
    this.cargarNoticias(this.segment.value);
  }

  cambioCategoria( event ) {
    //console.log(event.detail.value);
    this.noticias = [];

    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string, event?) {


    this.noticiasService.getTopHeadLineCategoria(categoria)
      .subscribe(resp => {
        this.noticias.push(...resp.articles);

          if (event) {
            event.target.complete();
          }
      });
  }

  loadData(event) {
    this.cargarNoticias( this.segment.value, event);
  }

}
