import { Component } from '@angular/core';
import { PadreComponent } from './padre/padre';
import { Hijo } from "./padre/hijo/hijo";
import { ViewChildComponent } from "./view-child/view-child";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ViewChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Decorador @ViewChild en Angular';

  currentYear: number = new Date().getFullYear();
}
