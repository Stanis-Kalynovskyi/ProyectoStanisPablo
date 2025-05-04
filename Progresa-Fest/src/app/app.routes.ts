import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { InfoComponent } from './componentes/info/info.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'navbar', component: InicioComponent },
  { path: 'footer', component: InicioComponent },
  { path: 'entradas', component: EntradasComponent },
  { path: 'info', component: InfoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carrito', loadComponent: () => import('./componentes/carrito/carrito.component').then(m => m.CarritoComponent) }, // Nueva ruta para el carrito
  { path: '**', component: PageNotFoundComponent } // Ruta de fallback
];