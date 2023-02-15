import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef;

  buscar(termino: string): void {
    console.log(this.txtBuscar);
  }
  //document.querySelector('input').value = '';
}
