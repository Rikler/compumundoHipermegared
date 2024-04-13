import { Component } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrl: './contactenos.component.scss'
})
export class ContactenosComponent {
  alertShow: boolean = false;
  nombre: string = '';
  correo: string = '';
  numero: string = '';

  enviar() {
    this.alertShow = true;
      setTimeout(() => {
        this.alertShow = false;
      }, 5000);
  }
}
