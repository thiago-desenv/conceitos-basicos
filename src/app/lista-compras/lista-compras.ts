import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {
  item: string = '';
  comprado: boolean = false;
  listaItem: ItemLista[] = [];

  adicionarItem() {
    if(this.item === '') {
      return;
    }

    let itemLista = new ItemLista();
    itemLista.id = this.listaItem.length + 1;
    itemLista.nome = this.item;
    itemLista.comprado = this.comprado;
    this.listaItem.push(itemLista);
    this.item = '';
  }

  limparItens() {
    this.listaItem = [];
  }

  riscarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
  }
}
