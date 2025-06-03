// cuadrito.component.ts
import { Component, OnInit,OnDestroy } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BotonHamburguesaComponent } from "../boton-hamburguesa/boton-hamburguesa.component";
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuadrito',
  imports: [CardModule, BotonHamburguesaComponent, RouterOutlet],
  templateUrl: './cuadrito.component.html',
  styleUrl: './cuadrito.component.css'
})
export class CuadritoComponent implements OnInit, OnDestroy{
  style = {
    width: '135vh',
    overflow: 'hidden',
    height: '85vh',
    'background-image': 'url(/img/living.png)',
    'background-size': '100%',
    position: 'relative'
  };

  backgrounds = ['living', 'kitchen', 'bathroom', 'patio','dormitorio'];
  index = 0;
  constructor(private router: Router) {}
  gifPosition = 0;
  moveDirection = 1;
  animationId: number | null = null;
  isAnimationPaused = false;
  gifUrl = '/img/salto.gif';
  gifFlipped=false;
  gifWidth="65vh";
  gifHeight="45vh"// Asegúrate de tener esta ruta correcta
  ngOnInit(): void {
    this.startAnimation();
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }
  
  startAnimation(): void {
    const animate = () => {
      if (!this.isAnimationPaused) {
        this.gifPosition += 0.4 * this.moveDirection;

        if (this.gifPosition > 78) {
          this.moveDirection = -1;
          this.gifFlipped=true;
        } else if (this.gifPosition < 0) {
          this.moveDirection = 1;
          this.gifFlipped=false;
        }
      }
      this.animationId = requestAnimationFrame(animate);
    };
    this.animationId = requestAnimationFrame(animate);
  }

  stopAnimation(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
  getGifStyle() {
    return {
      'position': 'absolute',
      'width': this.gifWidth,
      'height': this.gifHeight,
      'bottom': '6vh',
      'left': `${this.gifPosition}vh`,
      'transition': 'left 0.1s linear',
      'z-index': '10',
      'pointer-events': 'none',
      'transform': this.gifFlipped ? 'scaleX(-1)' : 'scaleX(1)'
    };
  }
  defaultGif = '/img/salto.gif';
  loveGif = '/img/amor-mensaje.GIF'; // Imagen estática para el modo amor
  isInLoveMode = false;
  loveModeDuration = 5000; 
  
  onLoveButtonClick() {
    if (this.isInLoveMode) return; // Evitar múltiples activaciones
    
    // Entrar en modo amor
    this.isInLoveMode = true;
    this.isAnimationPaused = true;
    this.gifUrl = this.loveGif;
    
    // Salir del modo amor después del tiempo definido
    setTimeout(() => {
      this.isInLoveMode = false;
      this.isAnimationPaused = false;
      this.gifUrl = this.defaultGif;
    }, this.loveModeDuration);
  }

  changeBackground(action: string) {
    if (action == "next") {
      this.index += 1;
    } else if (action == "prev") {
      this.index -= 1;
    }

    if (this.index < 0) {
      this.index = this.backgrounds.length - 1;
    }

    this.style = {
      ...this.style,
      'background-image': `url(/img/${this.backgrounds[this.index % this.backgrounds.length]}.png)`
    };
  }

  changePage(page: string) {
    if (page == "Cocina") {
      this.router.navigate(['/cocina']);
    } else if (page == "Juegos") {
      this.router.navigate(['/juegos']);
    } else if (page == "Tienda") {
      this.router.navigate(['/tienda']);
    }
    if(page=='Chat')
      {
        this.router.navigate(['/chat'])
      }
  }

  onHamburgerButtonClick(option: string) {
    console.log('Menu option clicked:', option);
  }
}