// filepath: f:\SATANIS\Codes\Html\ProyectoStanisPablo\Progresa-Fest\src\app\servicios\carrito.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cart: { title: string; quantity: number }[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(items: { title: string; quantity: number }[]) {
    this.cart = [...this.cart, ...items];
  }

  clearCart() {
    this.cart = [];
  }
}