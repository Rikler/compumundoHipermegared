import { Component, OnInit, TemplateRef  } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Genero, Libro } from '../../interface/genero';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  screenSelected: string = 'Home';
  rolUser: string;
  tituloGenero: string = '';
  descripcionGenero: string = '';
  librosGenero: Libro[] = [];
  closeResult = '';

  constructor(
    private loginService: LoginService,
    private librosSerivce: LibrosService,
    private modalService: NgbModal
  ) {
    this.rolUser = this.loginService.getUserRol();
  }

  ngOnInit() {
    if (this.librosSerivce.getGeneros().length <= 0) {
      this.librosSerivce.obtenerLibros().subscribe((generos: any) => {
        this.librosSerivce.setGeneros(generos);
        this.tituloGenero = generos[0].genero;
        this.descripcionGenero = generos[0].descripcion;
        this.librosGenero = generos[0].libros;
      });
    } else {
      this.obtenerFiccionModerna();
    }

  }

  open(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true ,ariaLabelledBy: 'modal-basic-title' });
    this.showScreen('Genero');
	}

  close() {
    this.modalService.dismissAll();
  }

  setGenero(genero: Genero) {
    this.tituloGenero = genero.genero;
    this.descripcionGenero = genero.descripcion;
    this.librosGenero = genero.libros;
    this.showScreen('Home');
  }

  obtenerFiccionModerna() {
    const genero = this.librosSerivce.getGenerosFiccionModerna();
    this.setGenero(genero);
    this.close();
  }

  obtenerFantasia() {
    const genero = this.librosSerivce.getGenerosFantasia();
    this.setGenero(genero);
    this.close();
  }

  obtenerCienciaFiccion() {
    const genero = this.librosSerivce.getGenerosCienciaFiccion();
    this.setGenero(genero);
    this.close();
  }

  showScreen(screen: string) {
    this.screenSelected = screen;
  }
}
