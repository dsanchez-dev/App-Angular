import { Component } from '@angular/core';
import { Padre } from './padre/padre';
import { ComponenteEnLinea } from "./componente-en-linea/componente-en-linea";
import { Hijo } from "./hijo/hijo";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hijo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected titulo = 'Hola Mundo desde Angular!';
}
