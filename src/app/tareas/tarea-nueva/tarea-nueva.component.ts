import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NuevaTarea, Tarea } from '../tarea/tarea.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea-nueva',
  imports: [FormsModule],
  templateUrl: './tarea-nueva.component.html',
  styleUrl: './tarea-nueva.component.css',
})
export class TareaNuevaComponent {
  @Input({ required: true }) idUsuario!: string;
  @Output() cerrar = new EventEmitter<void>();
  titulo = '';
  resumen = '';
  fecha = '';
  private tareaService = inject(TareasService);

  cerrarTareaNueva() {
    this.cerrar.emit();
  }

  guardarTarea() {
    this.tareaService.agregarTarea(
      {
        titulo: this.titulo,
        resumen: this.resumen,
        fecha: this.fecha,
      },
      this.idUsuario,
    );
    this.cerrar.emit();
  }
}
