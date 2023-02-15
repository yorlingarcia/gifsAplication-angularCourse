import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagesComponent } from './gifs-pages/gifs-pages.component';

@NgModule({
  declarations: [GifsPagesComponent],
  exports: [GifsPagesComponent],
  imports: [CommonModule],
})
export class GifsModule {}
