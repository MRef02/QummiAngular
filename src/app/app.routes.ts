import { Routes } from '@angular/router';
import { PaginaCocinaComponent } from './pagina-cocina/pagina-cocina.component';
import { PaginaJuegosComponent } from './pagina-juegos/pagina-juegos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaTiendaComponent } from './pagina-tienda/pagina-tienda.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { PaginaMascotasComponent } from './pagina-mascotas/pagina-mascotas.component';
import { PaginaSoporteComponent } from './pagina-soporte/pagina-soporte.component';

export const routes: Routes = [
    {path: '',  component: PaginaPrincipalComponent, },
    {path: 'cocina',  component: PaginaCocinaComponent, },
    {path: 'juegos', component: PaginaJuegosComponent},
    {path: 'tienda', component: PaginaTiendaComponent},
    {path:'usuario',component:PaginaUsuarioComponent},
    {path:'mascotas',component:PaginaMascotasComponent},
    {path:'soporte',component:PaginaSoporteComponent}
];
