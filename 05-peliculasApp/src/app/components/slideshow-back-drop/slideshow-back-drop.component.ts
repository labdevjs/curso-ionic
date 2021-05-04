import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-back-drop',
  templateUrl: './slideshow-back-drop.component.html',
  styleUrls: ['./slideshow-back-drop.component.scss'],
})
export class SlideshowBackDropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slidesOpts = {
    slidesPerView: 1.2,
    freeMode: true
  }

  constructor() { }

  ngOnInit() {}

}
