import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { ContenidoComponent } from './contenido/contenido.component';



@NgModule({
  declarations: [
    TituloComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TituloComponent,
    ContenidoComponent
  ]
  
})
export class BodyModule { }
