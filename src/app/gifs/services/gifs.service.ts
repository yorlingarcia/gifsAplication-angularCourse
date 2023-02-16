import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'qs8LlkJCirl2ltX0ojt6fMYsVvJTaVii';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];
  get historial() {
    return [...this._historial];
  }

  constructor(private htttp: HttpClient) {
    //this._historial = JSON.parse(localStorage.getItem('historial')!) ||  [];
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    this.resultados =
      JSON.parse(localStorage.getItem('ultimo_resultado')!) || [];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this.historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.htttp
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((response) => {
        // se ejecuta cuando hay solucion del get
        console.log(response.data);
        this.resultados = response.data;
        localStorage.setItem(
          'ultimo_resultado',
          JSON.stringify(this.resultados)
        );
      });
  }
}
