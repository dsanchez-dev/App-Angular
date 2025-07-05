import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class PadreComponent {
  mensaje: String = '';

  //Se emitio una cadena (String)
  recibirMensaje(mensajeHijo: String) {
    this.mensaje = mensajeHijo;
  }
}
