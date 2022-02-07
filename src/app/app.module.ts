import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


//tarea:
//crear un modulo llamado ContadorModule
//declaraciones y exportaciones
import { ContadorModule } from './contador/contador.module'


//se borran ya que fueron creados en el heroe.module.ts
/* import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component'; */
//en imports se llama al modulo creado HeoresModule
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
