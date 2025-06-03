import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-tienda',
  standalone: true, // 👈 Esto es CLAVE para que funcione correctamente
  imports: [CommonModule], // 👈 Necesario para que funcione *ngIf, *ngFor, etc.
  templateUrl: './pagina-tienda.component.html',
  styleUrls: ['./pagina-tienda.component.css'] // 👈 era "styleUrl", debe ser "styleUrls"
})
export class PaginaTiendaComponent {
  style = {
  width: '70vw',
  height: '80vh',
  overflow: 'hidden',
  margin: 'auto'
  };
  pestanaActiva: 'coins' | 'adicionales' = 'coins';

  cambiarPestana(pestana: 'coins' | 'adicionales') {
    this.pestanaActiva = pestana;
  }

  volver() {
    window.history.back();
  }
}
