import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  geAlbumes() {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     "Access-Control-Allow-Origin": "*"
    //   })
    // };
    // return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums', httpOptions);
    return this.http.get<any[]>('/assets/data/albumes.json');
  }
}
