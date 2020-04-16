import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let nombre:string = '';
    value = value.split('');
    for (let i = 0; i < value.length; i++) {
      switch (value[i]) {
        case 'M':
          value[i] = 1;
          break;
        case 'U':
          value[i] = 2;
          break;
        case 'R':
          value[i] = 3;
          break;
        case 'C':
          value[i] = 4;
          break;
        case 'I':
          value[i] = 5;
          break;
        case 'E':
          value[i] = 6;
          break;
        case 'L':
          value[i] = 7;
          break;
        case 'A':
          value[i] = 8;
          break;
        case 'G':
          value[i] = 9;
          break;
        case 'O':
          value[i] = 0;
          break;
      }

      nombre += value[i].toString();
    }
    return nombre;
  }

}
