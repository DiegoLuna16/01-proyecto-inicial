import { Component, inject, Input } from '@angular/core';
import { TareaComponent } from './tarea/tarea.component';
import { TareaNuevaComponent } from './tarea-nueva/tarea-nueva.component';
import { NuevaTarea } from './tarea/tarea.model';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  imports: [TareaComponent, TareaNuevaComponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
})
export class TareasComponent {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;
  estaAgregandoTareaNueva = false;
  //tareasService = inject(TareasService)

  constructor(private tareasService: TareasService) {}

  get tareasUsuarioSeleccionado() {
    return this.tareasService.obtenerTareasDeUsuario(this.idUsuario);
  }

  abrirTareaNueva() {
    this.estaAgregandoTareaNueva = true;
  }

  cerrarTareaNueva() {
    this.estaAgregandoTareaNueva = false;
  }
}
