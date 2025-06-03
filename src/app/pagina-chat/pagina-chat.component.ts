// cuadrito.component.ts
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BotonHamburguesaComponent } from "../boton-hamburguesa/boton-hamburguesa.component";
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-chat',
  imports: [CardModule, RouterOutlet],
  templateUrl: './pagina-chat.component.html',
  styleUrl: './pagina-chat.component.css'
})
export class ChatComponent{
    style = {
    width: '135vh',
    overflow: 'hidden',
    height: '85vh',
    'background-image': 'url(/img/Chat.png)',
    'background-size': '100%',
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