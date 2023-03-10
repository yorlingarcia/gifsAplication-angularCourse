import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../app.component.css'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get historial(): string[] {
    return this.gifsService.historial;
  }
  buscar(argumento: string) {
    this.gifsService.buscarGifs(argumento);
  }
}
