import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Router, ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-soporte',
  imports: [CardModule, RouterOutlet],
  templateUrl: './pagina-soporte.component.html',
  styleUrl: './pagina-soporte.component.css'
})
export class PaginaSoporteComponent
{
    style = {
    width: '135vh',
    overflow: 'hidden',
    height: '85vh',
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