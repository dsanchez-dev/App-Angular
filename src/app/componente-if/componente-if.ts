import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  imports: [],
  templateUrl: './componente-if.html',
  styleUrl: './componente-if.css',
})
export class ComponenteIf {
  isAutenticado: boolean = false;

  alternarAutenticado(): void {
    this.isAutenticado = !this.isAutenticado;
  }
}
