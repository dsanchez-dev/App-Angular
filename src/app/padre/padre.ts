import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class PadreComponent {
  @ViewChild(HijoComponent) componenteHijo!: HijoComponent;

  cambiarMensaje() {
    this.componenteHijo.cambiarMensaje('Nuevo mensaje desde el componente padre');
  }
}
