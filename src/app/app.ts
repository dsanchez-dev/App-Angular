import { Component } from '@angular/core';
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgregarTarea],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Local Reference en Angular';
}
