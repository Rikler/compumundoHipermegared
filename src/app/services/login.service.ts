import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLogin: boolean = false;
  rolUser: string = '1';

  constructor(
    private http: HttpClient,
  ) { }

  setUserLogin(userLogin: boolean) {
    this.userLogin = userLogin;
  }

  getUserLogin() {
    return this.userLogin;
  }

  setUserRol(rol: string) {
    this.rolUser = rol;
  }

  getUserRol() {
    return this.rolUser;
  }

  obtenerUsuarios() {
    return this.http.get('assets/usuarios.json').pipe(pluck('data'));
  }
}
