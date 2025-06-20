import { Component } from '@angular/core';
import { Replicador } from "./replicador/replicador";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Replicador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected titulo = 'Property binding en Angular';
}
