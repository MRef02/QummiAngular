import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Router, ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-usuario',
  imports: [CardModule, RouterOutlet],
  templateUrl: './pagina-usuario.component.html',
  styleUrl: './pagina-usuario.component.css'
})
export class PaginaUsuarioComponent
{
    style = {
    width: '135vh',
    overflow: 'hidden',
    height: '85vh',
    'background-image': 'url(/img/user.png)',
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