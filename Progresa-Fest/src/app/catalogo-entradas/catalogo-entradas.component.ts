import { Component, OnInit } from '@angular/core';
import { EntradasService } from '../entradas.service';
import { Entradas } from '../entradas';

@Component({
  selector: 'app-catalogo-entradas',
  templateUrl: './catalogo-entradas.component.html',
  styleUrls: ['./catalogo-entradas.component.css']
})
export class CatalogoEntradasComponent implements OnInit {
  entradas: Entradas[] = [];

  constructor(private entradaService: EntradasService) {}

  ngOnInit(): void {
    this.entradaService.obtenerEntradas().subscribe((entradas) => {
      this.entradas = entradas;
    });
  }
}

