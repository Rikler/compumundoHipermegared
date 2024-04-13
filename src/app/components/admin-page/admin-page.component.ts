import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Genero, Libro } from '../../interface/genero';

interface Libros {
	nombre: string;
	autor: string;
  imagen: string;
	genero: string;
	year: string;
	precio: string;
	descripcion: string;
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent implements OnInit {
  libros: Libros[] = [];
  nombreLibro: string = '';
  autorLibro: string = '';
  imagenLibro: string = '';
  generoLibro: string = '';
  yearLibro: string = '';
  precioLibro: string = '';
  descripcionLibro: string = '';

  constructor(
    private librosSerivce: LibrosService,
  ) {}

  ngOnInit() {
    this.obtenerLibros();
  }

  obtenerLibros() {
    const generos = this.librosSerivce.getGeneros();
    generos.forEach((genero: Genero) => {
      genero.libros.forEach((libro: Libro) => {
        const libroNuevo: Libros = {
          nombre: libro.nombre,
          autor: libro.autor,
          imagen: libro.imagen,
          genero: genero.genero,
          year: libro.year,
          precio: libro.precio,
          descripcion: libro.descripcion,
        };
        this.libros.push(libroNuevo);
      });
    });
  }

  agregarLibro() {
    const libroNuevo: Libro = {
      nombre: this.nombreLibro,
      autor: this.autorLibro,
      year: this.yearLibro,
      imagen: this.imagenLibro,
      precio: this.precioLibro,
      descripcion: this.descripcionLibro
    }
    this.librosSerivce.agregarLibro(parseInt(this.generoLibro), libroNuevo);
    this.limpiarCampos();
    this.obtenerLibros();
  }

  limpiarCampos() {
    this.nombreLibro = '';
    this.autorLibro = '';
    this.imagenLibro = '';
    this.generoLibro = '';
    this.yearLibro = '';
    this.precioLibro = '';
    this.descripcionLibro = '';
    this.libros = [];
  }
}
