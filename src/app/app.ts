import { Component } from '@angular/core';
import { ComponenteIf } from './componente-if/componente-if';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponenteIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Directiva @if en Angular';
}
