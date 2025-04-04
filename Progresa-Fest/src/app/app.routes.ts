import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { InfoComponent } from './componentes/info/info.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

export const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'navbar', component: InicioComponent },
  { path: 'footer', component: InicioComponent },
  { path: 'entradas', component: EntradasComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contacto', component: ContactoComponent },
];