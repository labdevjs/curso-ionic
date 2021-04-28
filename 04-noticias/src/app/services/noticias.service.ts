import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { delay } from 'rxjs/operators';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headLinesPage = 0;
  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    console.log(query);

    return this.http.get<T>(query, { headers});
  }

  getTopHeadLines() {
    this.headLinesPage++;
    //return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7a3b5a8f7ccb42fd95349c113a45ee7e`)
    //return this.http.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-03-27&sortBy=publishedAt&apiKey=7a3b5a8f7ccb42fd95349c113a45ee7e`);
    //return this.ejecutarQuery<RespuestaTopHeadLines>(`top-headlines?country=us&page=${this.headLinesPage}`);


    return this.http.get<RespuestaTopHeadLines>('/assets/data/TopHeadLines.json').pipe(delay(1000));
  }

  getTopHeadLineCategoria(categoria: string) {

    //https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=7a3b5a8f7ccb42fd95349c113a45ee7e
    //return this.ejecutarQuery<RespuestaTopHeadLines>(`top-headlines?country=de&category=${categoria}`);
    return this.http.get<RespuestaTopHeadLines>(`/assets/data/TopHeadLinesCategories.json`).pipe(delay(1000));
  }
}
