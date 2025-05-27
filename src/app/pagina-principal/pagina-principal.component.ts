import { Component } from '@angular/core';
import { CuadritoComponent } from "../cuadrito/cuadrito.component";
import { BotonComponent } from "../boton/boton.component";

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css',
  imports: [BotonComponent, CuadritoComponent]
})
export class PaginaPrincipalComponent {

}
