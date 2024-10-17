import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { TerminosdeserComponent } from './terminosdeser/terminosdeser.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { PoliticadeprivComponent } from './politicadepriv/politicadepriv.component';
import { NotasComponent } from './notas/notas.component';
import { NotaspComponent } from './notasp/notasp.component';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    LayoutModule,
    QuienessomosComponent,
    TerminosdeserComponent,
    IniciarsesionComponent,
   PoliticadeprivComponent,
   NotasComponent,
   NotaspComponent,
    
  ],
  exports:[QuienessomosComponent,  TerminosdeserComponent, IniciarsesionComponent, PoliticadeprivComponent, NotasComponent, NotaspComponent]

  
})
export class PagesModule{ 
  
}