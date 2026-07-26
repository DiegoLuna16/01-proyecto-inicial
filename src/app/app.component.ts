import { Component } from '@angular/core';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { USUARIOS_FALSOS } from './usuarios-falsos';
import { TareasComponent } from './tareas/tareas.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [EncabezadoComponent, UsuarioComponent, TareasComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usuarios = USUARIOS_FALSOS;
  idUsuarioSeleccionado?:string;

  get usuarioSeleccionado() {
    return this.usuarios.find(
      (usuario) => usuario.id === this.idUsuarioSeleccionado,
    )!;
  }

  alSeleccionarUsuario(id: string) {
    this.idUsuarioSeleccionado = id;
  }
}
