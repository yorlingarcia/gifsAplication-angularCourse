import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef;

  buscar(): void {
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
  }
  //document.querySelector('input').value = '';
}
