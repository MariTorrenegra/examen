import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  _url = 'https://d2rpzhocglww2h.cloudfront.net/test/test.json'

  constructor(
    private http:HttpClient
  ) { 
    console.log();
  }

  getResultados() {
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this._url, {
       headers:header
    }); 
  }

}
