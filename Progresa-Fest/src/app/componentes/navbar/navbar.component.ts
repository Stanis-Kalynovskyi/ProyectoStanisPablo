import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corregí "styleUrl" a "styleUrls"
})
export class NavbarComponent {
  isMenuCollapsed = true; // Controla el estado del menú hamburguesa

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed; // Alterna el estado del menú
  }

  closeMenu() {
    this.isMenuCollapsed = true; // Cierra el menú
  }
}