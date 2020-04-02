import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  
  formCacl;
  mostarResult: boolean = false;
  resultado:number = 0;

  constructor(private formBuilder: FormBuilder,) 
  { 

    this.formCacl = this.formBuilder.group({
      valor1: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
      valor2: new FormControl('', {validators: Validators.required, updateOn: 'blur'}),
      oper: new FormControl(0, {validators: Validators.required, updateOn: 'blur'})
    }, {updateOn: 'change'});
  }

  ngOnInit(): void {
  }

  calcular(){
    switch (this.formCacl.value.oper) {
      case '1':
        this.resultado = this.formCacl.value.valor1 + this.formCacl.value.valor2; 
        break;
      case '2':
        this.resultado = this.formCacl.value.valor1 - this.formCacl.value.valor2;
        break;
      case '3':
        this.resultado = this.formCacl.value.valor1 * this.formCacl.value.valor2;
        break;
      case '4':
        this.resultado = this.formCacl.value.valor1 / this.formCacl.value.valor2;
        break;
    }
    this.mostarResult = true;
    this.formCacl.get('valor1').setValue(this.resultado);
    this.formCacl.get('valor2').setValue();
    this.formCacl.get('oper').setValue(0);
  }
}
