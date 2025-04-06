import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent {
  tickets = [
    {
      title: 'ABONO GENERAL',
      description: 'Acceso normal al escenario.',
      quantity: 0,
    },
    {
      title: 'ABONO JOVEN',
      description: 'Los jóvenes hasta 29 años pueden obtener un 20% de descuento para todo tipo de conciertos.',
      quantity: 0,
    },
    {
      title: 'ENTRADA VIP',
      description: 'Acceso a escenario a primera fila con bebida incluida.',
      quantity: 0,
    }
  ];

  quantityOptions = [0, 1, 2, 3, 4, 5];

  // Guardar la selección cuando se aplique
  selectedTickets: { title: string; quantity: number }[] = [];

  apply() {
    // Filtra las entradas con cantidad > 0
    this.selectedTickets = this.tickets
      .filter(ticket => ticket.quantity > 0)
      .map(ticket => ({
        title: ticket.title,
        quantity: ticket.quantity
      }));

    console.log('Entradas aplicadas:', this.selectedTickets);
  }
}
