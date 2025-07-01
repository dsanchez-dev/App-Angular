import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-for',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './componente-for.html',
  styleUrl: './componente-for.css'
})
export class ComponenteFor {
  tareas: string[] = [
    'Aprender Angular',
    'Desarrollar una app',
    'Aprender TypeScript'
  ];

  nuevaTarea: string = '';

  agregarTarea(nuevaTarea: string): void {
    if (nuevaTarea?.trim()) {
      this.tareas.push(nuevaTarea.trim());
    }
  }
}
