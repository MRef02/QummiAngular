import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BotonComponent } from "../boton/boton.component";
import { FlechasComponent } from "../flechas/flechas.component";
import { BotonHamburguesaComponent } from "../boton-hamburguesa/boton-hamburguesa.component";

@Component({
  selector: 'app-cuadrito',
  imports: [CardModule, BotonComponent, FlechasComponent, BotonHamburguesaComponent],
  templateUrl: './cuadrito.component.html',
  styleUrl: './cuadrito.component.css'
})
export class CuadritoComponent {

}
