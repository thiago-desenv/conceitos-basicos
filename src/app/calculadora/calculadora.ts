import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado() {
    this.resultado = this.numero1 + this.numero2;
  }
}
