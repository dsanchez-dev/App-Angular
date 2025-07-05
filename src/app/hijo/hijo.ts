import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class HijoComponent {
  // !: operador non-null assertion
  // confie en que esta propiedad va ser inicializada
  @Input() mensaje!: string;
}