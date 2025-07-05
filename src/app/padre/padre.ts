import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class PadreComponent {
  mensajePadre: string = "Mensaje desde el componente padre"
}
