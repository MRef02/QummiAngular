import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-juegos',
  imports: [CardModule, RouterOutlet],
  templateUrl: './pagina-juegos.component.html',
  styleUrl: './pagina-juegos.component.css'
})
export class PaginaJuegosComponent {
    style = {
    width: '135vh',
    overflow: 'hidden',
    height: '85vh',
    'background-image': 'url(/img/JuegosPagina.png)',
    'background-size' : '100%',
    position:"absolute",
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)'
  };
  router=new Router();
  changePage(page:string)
  {
    if(page=="principal"){
      this.router.navigate(['/']);
    }
  }
}
