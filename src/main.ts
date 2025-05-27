import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PaginaPrincipalComponent } from './app/pagina-principal/pagina-principal.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
