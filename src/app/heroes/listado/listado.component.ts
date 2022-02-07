import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

//oninit es el primer ciclo de vida que podemos ver en angular
//son pasos o metodos que dispara angular de forma automatica
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado: string = '';


  borrarHeroe(){
    console.log('Borrando')
    //shift remueve el primer elemento del arreglo
    // || operador logico para especificar que si es undefined devuelva un  string vacio
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
