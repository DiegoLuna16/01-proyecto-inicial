import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Tarea } from './tarea.model';
import { TarjetaComponent } from "../../shared/tarjeta/tarjeta.component";
import { DatePipe } from '@angular/common';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea',
  imports: [TarjetaComponent, DatePipe],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css',
})
export class TareaComponent {
  @Input({ required:true}) tarea!: Tarea;
  private tareasService = inject(TareasService)

  alCompletarTarea () {
    this.tareasService.eliminarTarea(this.tarea.id)
 }
}
