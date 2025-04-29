// filepath: f:\SATANIS\Codes\Html\ProyectoStanisPablo\Progresa-Fest\src\app\componentes\carrito\carrito.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../servicios/carrito.service'; // Importar el servicio

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cart: { title: string; quantity: number }[] = [];

  constructor(private carritoService: CarritoService) {} // Inyectar el servicio

  ngOnInit(): void {
    this.cart = this.carritoService.getCart(); // Obtener los elementos del carrito
  }

  finalizarCompra(): void {
    alert('¡Compra finalizada con éxito!');
    this.carritoService.clearCart();
    this.cart = [];
  }
}