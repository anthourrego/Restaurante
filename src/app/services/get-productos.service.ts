import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetProductosService {

  constructor(private http: HttpClient) { }

  /* public getProductos(){
    return new Promise((resutlado, result)=>{
      setTimeout(()=>{
        resutlado(12)
      }, 3000);
      setTimeout(()=>{
        result(8)
      }, 2000);
    });
  }

  public getProductos2(){
    return Observable.create((obs)=>{
      setInterval(()=>{
        obs.next(Math.random());
      }, 3000);
    });
  } */

  public getProductos() {
    return this.http.get('http://localhost:8000/api/listaPlatos');
    //return this.http.get('/api/listaPlatos');
  }
}
