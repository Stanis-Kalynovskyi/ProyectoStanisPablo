import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Asegúrate de tener RouterOutlet
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RouterModule } from '@angular/router'; // Importa RouterModule para que funcione el enrutador

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, RouterModule], // Importa RouterModule aquí también
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progresa-Fest';
}

