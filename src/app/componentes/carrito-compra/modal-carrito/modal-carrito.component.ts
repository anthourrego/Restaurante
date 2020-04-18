import { Component, OnInit, Input } from '@angular/core';
import { GetProductosService } from 'src/app/services/get-productos.service';
declare var $ : any;

@Component({
  selector: 'app-modal-carrito',
  templateUrl: './modal-carrito.component.html',
  styleUrls: ['./modal-carrito.component.css']
})
export class ModalCarritoComponent implements OnInit {
  newProductos: object[] = [];
  total: number = 0;

  constructor(private _productos: GetProductosService) {
    this.listarProductosModal();
  }

  ngOnInit(): void {}

  validarProducto(datos){
    const nuevaLista = [];
    let total: number = 0;

    datos.forEach(element => {
      const posicion = nuevaLista.indexOf(element);
      if (posicion === -1) {
        element.cantidad = 1;
        nuevaLista.push(element);
      } else {
        nuevaLista[posicion].cantidad += 1;
      }
    });

    nuevaLista.forEach(element => {
      total += element.precio * element.cantidad;
    });

    this.newProductos = nuevaLista;
    this.total = total;
  }

  listarProductosModal() {
    this._productos.obsListaProductos
    .subscribe(
      (datos) => {
        this.validarProducto(datos);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  aumentaOdisminuir(accion: number, posicion: number){
    this._productos.aumentaOdisminuir(accion, this.newProductos[posicion]);
  }
}
