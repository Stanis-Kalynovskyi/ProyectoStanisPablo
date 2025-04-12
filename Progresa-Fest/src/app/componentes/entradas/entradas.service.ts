import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entradas } from './entradas';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  private url = 'assets/data/entradas.json'; // Ruta al archivo JSON de entradas

  constructor(private http: HttpClient) {}

  // Método para obtener las entradas
  obtenerEntradas(): Observable<Entradas[]> {
    return this.http.get<Entradas[]>(this.url);
  }

  // Método para obtener una entrada por ID
  obtenerEntradaPorId(id: number): Observable<Entradas> {
    return this.http.get<Entradas>(`${this.url}/${id}`);
  }
}
