import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-contacto',
templateUrl: './contact.component.html',
styleUrls: ['./contact.component.css']
})
export class ContactoComponent {
formData = {
nombre: '',
email: '',
mensaje: ''
};

enviarFormulario() {
console.log('Formulario enviado:', this.formData);
alert('¡Mensaje enviado!');
this.formData = { nombre: '', email: '', mensaje: '' };
}
}