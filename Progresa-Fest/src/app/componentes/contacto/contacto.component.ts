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

import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formData = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  enviarFormulario() {
    console.log('Formulario enviado:', this.formData);
    // Aquí podrías hacer algo como enviar a un backend o servicio
    alert('¡Mensaje enviado!');
    this.formData = { nombre: '', email: '', mensaje: '' }; // Reset
  }
}

*/