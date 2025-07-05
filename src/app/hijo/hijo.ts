import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class HijoComponent {
  //Output se utiliza para emitir eventos desde el componente hijo al padre
  @Output() notificarPadre = new EventEmitter<String>();

  //Metodo para enviar mensaje al componente padre
  enviarMensaje() {
    this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
  }
}
