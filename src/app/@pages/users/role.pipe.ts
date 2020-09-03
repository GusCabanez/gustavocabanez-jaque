import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var transformed; 

    switch (value) {
      case 1:
        transformed = 'Dueño'
        break;
      case 2:
        transformed = 'Administrador'
        break;
      case 3: 
        transformed = 'Staff'
        break; 
      default: 
        transformed = 'Dueño'
        break;
    }
      return transformed;
  }
}
