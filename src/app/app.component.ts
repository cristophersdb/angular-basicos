import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  //metodo, el this apunta a la instancia del AppComponent
  sumar(){
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }

  //crear propiedad y va a inializar en 5 -> base: number = 5;

  //optimizar
  acumular( valor: number = 5 ){
    this.numero += valor;
  }
}
