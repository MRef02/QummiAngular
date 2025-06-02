import { Routes } from '@angular/router';
import { PaginaCocinaComponent } from './pagina-cocina/pagina-cocina.component';
import { PaginaJuegosComponent } from './pagina-juegos/pagina-juegos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaTiendaComponent } from './pagina-tienda/pagina-tienda.component';

export const routes: Routes = [
    {path: '',  component: PaginaPrincipalComponent, },
    {path: 'cocina',  component: PaginaCocinaComponent, },
    {path: 'juegos', component: PaginaJuegosComponent},
    {path: 'tienda', component: PaginaTiendaComponent}
];
