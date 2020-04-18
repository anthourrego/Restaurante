import { Component, OnInit } from '@angular/core';
import { GetProductosService } from 'src/app/services/get-productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Array<Object> = [
    { 
      id: 1,
      nombre: 'Hamburguesa',
      descripcion: 'El super combo con papas.',
      img: '../../../assets/productos/01.jpg',
      precio: 10500,
    },
    {
      id: 2,
      nombre: 'Nugets',
      descripcion: 'Con papitas y bien fritas.',
      img: '../../../assets/productos/02.jpg',
      precio: 6500,
    },
    {
      id: 3,
      nombre: 'Carnita de patico',
      descripcion: 'Te va dar pesar comertelo.',
      img: '../../../assets/productos/03.jpg',
      precio: 15500,
    },
    {
      id: 4,
      nombre: 'Sancochito',
      descripcion: 'Delicioso muy delicoso.',
      img: '../../../assets/productos/04.jpg',
      precio: 16500,
    },
    {
      id: 5,
      nombre: 'Salchicha',
      descripcion: 'En forma de corazón.',
      img: '../../../assets/productos/05.jpg',
      precio: 3500,
    },
    {
      id: 6,
      nombre: 'Pizza',
      descripcion: 'Para que te la comas toda todita.',
      img: '../../../assets/productos/06.jpg',
      precio: 4500,
    }
  ];

  constructor(private _productos:GetProductosService) { }

  ngOnInit(): void {
  }

  addProducto(producto){
    this._productos.agregarCarrito(producto);
  }

}
