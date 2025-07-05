import { Component } from '@angular/core';
import { PadreComponent } from './padre/padre';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PadreComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Decorador @Input en Angular';

  currentYear: number = new Date().getFullYear();
}
