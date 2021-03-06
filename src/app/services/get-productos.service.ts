import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductosService {
  productos : object[] = [];

  private listaProductos = new Subject<any>();
  public obsListaProductos = this.listaProductos.asObservable();

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

  public agregarCarrito(product: object){
    this.productos.push(product);
    this.listaProductos.next(this.productos);
  }

  public aumentaOdisminuir(tipo: number, producto: object){
    const pos = this.productos.indexOf(producto);
    if (tipo === 1) {
      this.agregarCarrito(this.productos[pos]);
    } else {
      this.productos.splice(pos, 1);
      this.listaProductos.next(this.productos);
    }
  }

  /* public datosCarrito():Observable<any>{
    return Observable.create((obs)=>{
                        obs.next(this.productos);
                      }); 
  } */
}
