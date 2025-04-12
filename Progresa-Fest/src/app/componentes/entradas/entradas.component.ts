import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  tickets: any[] = [];
  quantityOptions = [0, 1, 2, 3, 4, 5];
  selectedTickets: { title: string; quantity: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/entradas.json').subscribe(data => {
      this.tickets = data;
    });
  }

  apply() {
    this.selectedTickets = this.tickets
      .filter(ticket => ticket.quantity > 0)
      .map(ticket => ({
        title: ticket.title,
        quantity: ticket.quantity
      }));

    console.log('Entradas aplicadas:', this.selectedTickets);
  }
}
