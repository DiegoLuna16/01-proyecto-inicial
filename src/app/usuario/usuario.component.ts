import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) nombre!: string;

  @Output() seleccion = new EventEmitter();
  
  // seleccion = output<string>();
  // avatar = input.required<string>()
  // nombre = input.required<string>()

  get rutaImagen() {
    return 'assets/usuarios/' + this.avatar;
  }
  alSeleccionarUsuario() {
    this.seleccion.emit(this.id);
  }
}
