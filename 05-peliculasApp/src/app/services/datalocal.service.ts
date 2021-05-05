import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  peliculas: PeliculaDetalle[] = [];

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  guardarPelicula(pelicula: PeliculaDetalle) {
    this.peliculas.push(pelicula);

    this.set('peliculas', this.peliculas);

  }

}
