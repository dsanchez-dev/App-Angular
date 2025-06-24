import { Component } from '@angular/core';
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Replicador, Saludar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected titulo = 'Property binding en Angular';
}
