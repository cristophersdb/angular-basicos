import { Component } from '@angular/core';





@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

  nombre: string = 'IronMan';
  edad: number = 45;

  //se puede crear get y set, el get crea mediante codigo una propiedad cuando yo la llame sera procesada
  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }
  //metodo
  obtenerNombre(): string {
    return ` ${ this.nombre } - ${ this.edad }`;
  }


  //metodo, si no regresa nada se puede poner un void
  cambiarNombre():void {
    this.nombre = 'Spiderman';

  }

  cambiarEdad():void {
    this.edad = 30;
  }


}
