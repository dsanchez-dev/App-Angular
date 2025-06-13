import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";
import { ComponenteEnLinea } from "./componente-en-linea/componente-en-linea";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponente, ComponenteEnLinea],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected mensaje = 'Hola Angular!';
}
