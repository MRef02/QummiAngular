import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BotonComponent } from "../boton/boton.component";
import { FlechasComponent } from "../flechas/flechas.component";
import { BotonHamburguesaComponent } from "../boton-hamburguesa/boton-hamburguesa.component";
import { Router, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cuadrito',
  imports: [CardModule, BotonHamburguesaComponent, RouterOutlet],
  templateUrl: './cuadrito.component.html',
  styleUrl: './cuadrito.component.css'
})
export class CuadritoComponent {
  style = {
    width: '135vh',
    overflow: 'hidden',
    height: '85vh',
    'background-image': 'url(/img/living.png)',
    'background-size' : '100%'
  };

  backgrounds = ['living', 'kitchen', 'bathroom', 'patio']

  index = 0

  router = new Router();

  changeBackground(action: String) {
    if(action == "next"){
      this.index += 1
    }
    else if(action == "prev"){
      this.index -= 1
    }

    if(this.index < 0){
      this.index = this.backgrounds.length - 1;
    }

    this.style = {
      ...this.style,
      'background-image': `url(/img/${this.backgrounds[this.index%this.backgrounds.length]}.png)`
    };
  }

  changePage(page: String) {
    if(page == "Cocina"){
      this.router.navigate(['/cocina']);
    }
    else if(page == "Juegos"){
      this.router.navigate(['/juegos']);
    }
    else if(page == "Tienda"){
      this.router.navigate(['/tienda']);
    }
  }

  onHamburgerButtonClick(option: string) {
  console.log('Menu option clicked:', option);
}
}
