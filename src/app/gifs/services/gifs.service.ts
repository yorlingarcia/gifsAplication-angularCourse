import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'qs8LlkJCirl2ltX0ojt6fMYsVvJTaVii';
  private _historial: string[] = [];
  public resultados: Gif[] = [];
  get historial() {
    return [...this._historial];
  }

  constructor(private htttp: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this.historial));
    }
    this.htttp
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=qs8LlkJCirl2ltX0ojt6fMYsVvJTaVii&q=${query}&limit=10`
      )
      .subscribe((response) => {
        // se ejecuta cuando hay solucion del get
        console.log(response.data);
        this.resultados = response.data;
      });
  }
}
