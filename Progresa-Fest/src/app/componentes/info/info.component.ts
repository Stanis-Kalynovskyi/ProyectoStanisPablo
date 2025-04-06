import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  sections = [
    { title: 'GUÍA DE COMPRA', isOpen: false, content: 'ProgresaFest es un evento exclusivo organizado por el colegio Progresa. Para asegurar tu entrada, sigue los pasos a continuación: \n 1. Selecciona el tipo de entrada que deseas adquirir (general, VIP, etc.).\n 2. Añádela a tu carrito y procede al pago de forma segura. \n3. Recibirás un correo de confirmación con tu entrada digital o física.Guarda tu entrada para acceder al evento en la fecha indicada.\n 4. Asegúrate de completar la compra antes de que se agoten las entradas. \n\n ¡Nos vemos en ProgresaFest!'}, 
    { title: 'ABONOS/ENTRADAS', isOpen: false, content: `En ProgresaFest ofrecemos diferentes tipos de abonos y entradas para adaptarnos a tus necesidades:
      1. Entrada General: Acceso completo al evento.
      2. Entrada VIP: Acceso preferencial, zona exclusiva y otros beneficios.
      3. Abono de 2 días: Para disfrutar del festival durante los dos días.
      
      Consulta nuestras opciones y elige la entrada que mejor se ajuste a ti. ¡Te esperamos en ProgresaFest!`
       },
    { title: 'HORARIOS', isOpen: false, content: `ProgresaFest se llevará a cabo en dos días llenos de música, actividades y diversión. Los horarios son los siguientes:

      Día 1:
      - Apertura de puertas: 10:00 AM
      - Primer concierto: 11:00 AM
      - Actividades paralelas: 12:00 PM - 6:00 PM
      - Conciertos principales: 7:00 PM - 11:00 PM
      
      Día 2:
      - Apertura de puertas: 10:00 AM
      - Conciertos y actividades: 11:00 AM - 9:00 PM
      - Cierre del evento: 10:00 PM
      
      ¡No te pierdas ninguno de los momentos increíbles que tenemos preparados!`
       },
    { title: 'CÓMO LLEGAR', isOpen: false, content: `ProgresaFest se celebra en la cuidad de las Artes y las Ciencias, en un lugar de fácil acceso. A continuación te explicamos cómo llegar:

      - **En coche**: El recinto cuenta con parking disponible. Puedes usar el GPS con la dirección "ProgresaFEST" para llegar fácilmente.
      - **En transporte público**: Las líneas de autobuses 99, 92 y 19 tienen parada cerca del evento. Además, la estación de metro "Xativa" está a solo 10 minutos a pie.
      - **En bicicleta**: Hay estacionamiento para bicicletas cerca de la entrada principal.
      
      Recomendamos llegar con antelación para evitar aglomeraciones. ¡Nos vemos pronto en ProgresaFest!`
       },
    { title: 'PULSERAS', isOpen: false, content: `Las pulseras son tu acceso al evento y se entregarán al realizar la compra de la entrada. Estas pulseras tienen diferentes funciones:

      - **Acceso general**: Permite la entrada al recinto y la participación en actividades principales.
      - **Pulsera VIP**: Ofrece acceso exclusivo a zonas especiales, actividades privadas y servicios adicionales.
      - **Pulseras de consumo**: También podrás usar tu pulsera para realizar compras dentro del evento de manera rápida y segura.
      
      Recuerda que deberás portar tu pulsera durante todo el evento para garantizar el acceso a todas las áreas. ¡A disfrutar del festival!`
       },
  ];

  // Función para reemplazar saltos de línea \n por <br>
  formatContent(content: string): string {
    return content.replace(/\n/g, '<br>');
  }

  toggleSection(index: number): void {
    this.sections[index].isOpen = !this.sections[index].isOpen;
  }
}

