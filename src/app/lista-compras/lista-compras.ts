import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {
  item: string = '';

  adicionarItem() {
    console.log('valor item: ', this.item);
    this.item = '';
  }
}
