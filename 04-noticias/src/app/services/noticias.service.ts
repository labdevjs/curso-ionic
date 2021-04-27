import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { }

  getTopHeadLines() {
    //return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7a3b5a8f7ccb42fd95349c113a45ee7e`)
    //return this.http.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-03-27&sortBy=publishedAt&apiKey=7a3b5a8f7ccb42fd95349c113a45ee7e`);

    return this.http.get<RespuestaTopHeadLines>('/assets/data/TopHeadLines.json').pipe(delay(1000));
  }
}
