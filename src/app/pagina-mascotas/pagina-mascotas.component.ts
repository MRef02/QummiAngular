import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Router, ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-mascotas',
  imports: [CardModule, RouterOutlet],
  templateUrl: './pagina-mascotas.component.html',
  styleUrl: './pagina-mascotas.component.css'
})
export class PaginaMascotasComponent
{
    style = {
    width: '135vh',
    overflow: 'hidden',
    height: '85vh',
    'background-image': 'url(/img/skins.png)',
    'background-size' : '90%',
    position:"absolute",
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)'
    };
    router=new Router();
    changePage(page:string)
    {
      if(page=="principal")
        {
          this.router.navigate(['/'])
        }
    }
}