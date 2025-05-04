// filepath: f:\SATANIS\Codes\Html\ProyectoStanisPablo\Progresa-Fest\src\app\componentes\entradas\entradas.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  tickets: any[] = []; // Almacena los datos de entradas.json
  quantityOptions = [0, 1, 2, 3, 4, 5]; // Opciones de cantidad
  selectedTickets: { title: string; quantity: number }[] = []; // Entradas seleccionadas

  constructor(
    private http: HttpClient,
    private router: Router,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    // Cargar datos desde entradas.json
    this.http.get<any[]>('assets/entradas.json').subscribe(data => {
      this.tickets = data; // Asignar los datos al array tickets
    });
  }

  apply() {
    // Filtrar las entradas seleccionadas
    this.selectedTickets = this.tickets
      .filter(ticket => ticket.quantity > 0)
      .map(ticket => ({
        title: ticket.title,
        quantity: ticket.quantity
      }));

    console.log('Entradas aplicadas:', this.selectedTickets);
  }

  // filepath: f:\SATANIS\Codes\Html\ProyectoStanisPablo\Progresa-Fest\src\app\componentes\entradas\entradas.component.ts
  addToCart() {
    if (this.selectedTickets.length > 0) {
      // Añadir las entradas seleccionadas al carrito
      this.carritoService.addToCart(this.selectedTickets);
      console.log('Carrito actualizado:', this.carritoService.getCart());
      alert('Entradas añadidas al carrito');
  
      // Restablecer las cantidades de las entradas
      this.tickets.forEach(ticket => (ticket.quantity = 0));
  
      // Vaciar el array de entradas seleccionadas
      this.selectedTickets = [];
  
      // Navegar al carrito
      this.router.navigate(['/carrito']);
    } else {
      alert('No has seleccionado ninguna entrada');
    }
  }
}
