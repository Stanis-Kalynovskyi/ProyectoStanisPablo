import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}

/*

<div class="container mt-4">
  <h3>Contáctanos</h3>
  <form (ngSubmit)="enviarFormulario()" #contactForm="ngForm">
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="nombre" name="nombre" [(ngModel)]="formData.nombre" required />
    </div>

    <div class="mb-3">
      <label for="correo" class="form-label">Correo electrónico</label>
      <input type="email" class="form-control" id="correo" name="correo" [(ngModel)]="formData.correo" required />
    </div>

    <div class="mb-3">
      <label for="mensaje" class="form-label">Mensaje</label>
      <textarea class="form-control" id="mensaje" name="mensaje" rows="4" [(ngModel)]="formData.mensaje" required></textarea>
    </div>

    <button type="submit" class="btn btn-primary">ENVIAR</button>
  </form>
</div>


*/