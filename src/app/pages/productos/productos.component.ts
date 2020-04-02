import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Array<Object> = [
    {
      nombre: 'Hamburguesa',
      descripcion: 'El super combo con papas.',
      img: '../../../assets/productos/01.jpg',
    },
    {
      nombre: 'Nugets',
      descripcion: 'Con papitas y bien fritas.',
      img: '../../../assets/productos/02.jpg',
    },
    {
      nombre: 'Carnita de patico',
      descripcion: 'Te va dar pesar comertelo.',
      img: '../../../assets/productos/03.jpg',
    },
    {
      nombre: 'Sancochito',
      descripcion: 'Delicioso muy delicoso.',
      img: '../../../assets/productos/04.jpg',
    },
    {
      nombre: 'Salchicha',
      descripcion: 'En forma de corazón.',
      img: '../../../assets/productos/05.jpg',
    },
    {
      nombre: 'Pizza',
      descripcion: 'Para que te la comas toda todita.',
      img: '../../../assets/productos/06.jpg',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
