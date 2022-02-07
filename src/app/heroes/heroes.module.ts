//importamos ngmodule
import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from "@angular/common";

//usar decorador
//declaraciones es un arreglo, dicen que cosas contiene este modulo (componentes,pipes etc)
//export,que cosas quiero que sean visibles fuera del modulo
//import, significa que dentro van modulos (solo modulos)
@NgModule({

  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]

})

//en angular todo es una clase, por eso la exportamos
export class HeroesModule{

}
