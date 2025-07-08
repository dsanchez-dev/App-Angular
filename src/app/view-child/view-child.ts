import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.html',
  styleUrl: './view-child.css',
})
export class ViewChildComponent {
  
  @ViewChild('referenciaInput') inputElement!: ElementRef;

  cambiarTexto() {
    this.inputElement.nativeElement.value = 'Texto cambiado desde el componente';
  }
}
