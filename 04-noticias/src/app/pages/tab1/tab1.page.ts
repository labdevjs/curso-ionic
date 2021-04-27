import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { RespuestaTopHeadLines, Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  noticias: Article[] = []
  constructor( private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticiasService.getTopHeadLines().subscribe(resp => {
      console.log('noticias', resp);
      //this.noticias = resp.articles;
      this.noticias.push( ...resp.articles);
    })
  }

}
