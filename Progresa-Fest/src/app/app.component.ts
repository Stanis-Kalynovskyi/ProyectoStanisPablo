import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './contact/contact.component'; // Asegúrate de la ruta correcta

const routes: Routes = [
{
path: '',

children: [
// Otras rutas de tu aplicación
{ path: 'contacto', component: ContactoComponent }, // Ruta para tu componente de contacto
{ path: '', redirectTo: '/', pathMatch: 'full' } // Ejemplo de ruta por defecto
]
},
// Cualquier otra ruta de nivel superior que necesites
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
