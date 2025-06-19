import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {
  private titulo = 'Hola desde el Titulo Hijo!';

  //Getter de la propiedad
  get mostrarTitulo() {
    return this.titulo;
  }
  
  //Metodo normal
  public getTitulo() {
    return this.titulo;
  }

}
