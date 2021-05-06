import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';
import { PreloadingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  peliculas: PeliculaDetalle[] = [];

  private _storage: Storage | null = null;

  constructor(private storage: Storage,
    private toastCtrl: ToastController) {
    this.init();
    this.cargarFavoritos();
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

    let existe = false;
    let mensaje = '';

    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Borrado de favoritos';
    } else {
      this.peliculas.push(pelicula);
      mensaje = 'Añadida a favoritos';
    }

    this.set('peliculas', this.peliculas);
    this.presentToast(mensaje);

    return !existe;

  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  async cargarFavoritos() {
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;

  }

  async existePelicula(id) {

    await this.cargarFavoritos();
    const existe = this.peliculas.find(peli => peli.id === id);

    return (existe) ? true: false;
  }

}
