// filepath: f:\SATANIS\Codes\Html\ProyectoStanisPablo\Progresa-Fest\src\app\componentes\contacto\contacto.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule], // Incluir FormsModule aquí
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formData = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  enviarFormulario() {
    console.log('Formulario enviado:', this.formData);
    alert('¡Formulario enviado con éxito!');
  }
}