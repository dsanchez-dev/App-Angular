import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  standalone: true,
  imports: [],
  template: `
  <h1>{{ 'Componente en Línea' }}</h1>
    <p>Fuente más grande</p>
  `,
  styles: `
  h1 {
    color: #d9d9d9;
  }
  p {
    font-size: 20px;
  }
  `
})
export class ComponenteEnLinea {

}
