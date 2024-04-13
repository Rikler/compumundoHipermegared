export interface Genero {
  id: string;
  genero: string,
  descripcion: string,
  libros: Libro[]
}

export interface Libro {
  nombre: string,
  autor: string,
  year: string,
  imagen: string,
  precio: string,
  descripcion: string,
}
