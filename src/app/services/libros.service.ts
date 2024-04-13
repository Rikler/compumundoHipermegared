import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero, Libro } from '../interface/genero';
import { pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  generos: Genero[] = [];

  constructor(
    private http: HttpClient
  ) {}

  setGeneros(generos: Genero[]) {
    this.generos = generos;
  }

  getGeneros() {
    return this.generos;
  }

  obtenerLibros() {
    return this.http.get('assets/generos.json').pipe(pluck('data'));
  }

  getGenerosFiccionModerna() {
    return this.generos[0];
  }

  getGenerosFantasia() {
    return this.generos[1];
  }

  getGenerosCienciaFiccion() {
    return this.generos[2];
  }

  agregarLibro(genero: number, libro: Libro) {
    this.generos[genero].libros.push(libro);
  }
}
