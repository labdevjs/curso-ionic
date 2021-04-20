import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aguaman','Superman', 'Batman', 'Flash','Mujer maravilla']
  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    //console.log(event);
    event.detail.complete();
  }

  onClick(){
    console.log(this.personajes);

  }

}
