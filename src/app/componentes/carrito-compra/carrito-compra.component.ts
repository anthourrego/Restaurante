import { Component, OnInit } from '@angular/core';
import { GetProductosService } from 'src/app/services/get-productos.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {
  listaProducto : object[] = [];


  constructor(private _productos:GetProductosService) {
    this.listraProductos();
  }

  ngOnInit(): void {
  }
  
  listraProductos(){
    this._productos.obsListaProductos
    .subscribe(
      (datos) => {
        this.listaProducto = datos;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  /* listarPlatos(){
    this._productos.getPlatos()
    .subscribe(
      (data) => { // Success
        if (data['success']) {
          this.datosSelect = data['mensaje'];
          console.log(this.datosSelect);
        } else {
          console.log("No funca");
        }
      },
      (error) => {
        console.error(error);
      }
    );
  } */

}
