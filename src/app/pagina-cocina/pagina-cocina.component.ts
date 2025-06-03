import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-cocina',
  imports: [CardModule, RouterOutlet],
  templateUrl: './pagina-cocina.component.html',
  styleUrl: './pagina-cocina.component.css'
})
export class PaginaCocinaComponent {
    style = {
    width: '135vh',
    overflow: 'hidden',
    height: '85vh',
    'background-image': 'url(/img/Refrigerador.png)',
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
