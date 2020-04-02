import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { GetProductosService } from '../../services/get-productos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  
  formulario;
  datosSelect;
  vec:any;
  
  constructor(
    private formBuilder: FormBuilder,
    private _productos:GetProductosService
    ){ 
    
    this.formulario = this.formBuilder.group({
      nombres: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
      apellidos: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
      telefono: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
      correo: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
      direccion: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
      acepto: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
      categoria: new FormControl(0, {validators: Validators.required, updateOn: 'blur'})
    }, {updateOn: 'change'});
    
    this._productos.getProductos().subscribe(resp=>{
      console.log(resp);
      if (resp["success"] == true) {
        this.vec = resp['mensaje']; 
      }
    });
    /* this._productos.getProductos().then(resultado=>{
      console.log(resultado);
    },
    result=>{
      console.log(result);
    }) */
  }

  ngOnInit(): void {
    //this.listarPlatos();
  }

  funcionSubmit(){
    console.log(this.formulario.value);
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
