import { Component } from '@angular/core';
import { MensajeService } from './mensaje';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  titulo = 'Servicios en Angular';

  mensaje: string;

  constructor(mensajeService: MensajeService) {
    this.mensaje = mensajeService.obtenerMensaje();
  }

  currentYear: number = new Date().getFullYear();
}
