import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css'
})
export class Interpolacion {
  titulo = 'Interpolación en Angular';
  usuario = {
    nombre: 'Daniel Sánchez',
    edad: 22,
  };

  saludar() {
    return `Hola, mi nombre es ${this.usuario.nombre} y tengo ${this.usuario.edad} años.`;
  }
}
