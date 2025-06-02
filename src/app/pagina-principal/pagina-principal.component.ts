import { Component } from '@angular/core';
import { CuadritoComponent } from "../cuadrito/cuadrito.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css',
  imports: [CuadritoComponent, RouterOutlet]
})
export class PaginaPrincipalComponent {

}
