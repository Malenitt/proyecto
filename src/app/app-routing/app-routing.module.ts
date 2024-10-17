import { NgModule } from '@angular/core';
import { RouterModule, Routes}  from '@angular/router';
import { IniciarsesionComponent } from '../pages/iniciarsesion/iniciarsesion.component';
import { QuienessomosComponent } from '../pages/quienessomos/quienessomos.component';
import { TerminosdeserComponent } from '../pages/terminosdeser/terminosdeser.component';
import { PoliticadeprivComponent } from '../pages/politicadepriv/politicadepriv.component';
import { NotasComponent } from '../pages/notas/notas.component';
import { NotaspComponent } from '../pages/notasp/notasp.component';
const routes: Routes = [
  {path: 'politicadepriv', component: PoliticadeprivComponent},
  {path: 'quienes-somos', component: QuienessomosComponent},
  {path: 'terminosdeser', component: TerminosdeserComponent},
  {path: 'iniciar-sesion', component: IniciarsesionComponent},
  {path: 'notas', component: NotasComponent},
  {path: 'notasp', component: NotaspComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }
