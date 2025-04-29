import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroData = {
    nombre: '',
    email: '',
    password: '',
    confirmarPassword: ''
  };

  registrar() {
    if (this.registroData.password !== this.registroData.confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Datos de registro:', this.registroData);
    alert('Registro exitoso (simulado)');
  }
}

