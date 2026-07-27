import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Usuario } from './usuario.model';
import { TarjetaComponent } from "../shared/tarjeta/tarjeta.component";




// type Usuario = {
//   id: string;
//   avatar: string;
//   nombre: string;
// };

@Component({
  selector: 'app-usuario',
  imports: [TarjetaComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  @Input({ required: true }) usuario!: Usuario;
  @Input({ required: true }) seleccionado!: boolean;
  @Output() seleccion = new EventEmitter();
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) nombre!: string;


  // seleccion = output<string>();
  // avatar = input.required<string>()
  // nombre = input.required<string>()

  get rutaImagen() {
    return 'assets/usuarios/' + this.usuario.avatar;
  }
  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}
