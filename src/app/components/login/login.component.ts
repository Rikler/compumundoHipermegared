import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  alertShow: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  login() {
    this.loginService.obtenerUsuarios().subscribe((usuarios: any) => {
      usuarios.forEach((usuario: User) => {
        if (this.correo === usuario.correo && this.password === usuario.password) {
          this.loginService.setUserLogin(true);
          this.loginService.setUserRol(usuario.rol);
          this.router.navigate(['home']);
          return;
        }
      });
      this.alertShow = true;
      setTimeout(() => {
        this.alertShow = false;
      }, 5000);
    });
  }
}
