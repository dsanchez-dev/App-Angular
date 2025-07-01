import { Component } from '@angular/core';
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";
import { ComponenteFor } from "./componente-for/componente-for";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponenteFor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Directiva @For en Angular';
}
