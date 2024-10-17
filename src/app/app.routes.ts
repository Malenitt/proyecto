import { Routes } from '@angular/router';
import { PoliticadeprivComponent } from './pages/politicadepriv/politicadepriv.component'; 
import { QuienessomosComponent } from './pages/quienessomos/quienessomos.component';
import { IniciarsesionComponent } from './pages/iniciarsesion/iniciarsesion.component';
import { TerminosdeserComponent } from './pages/terminosdeser/terminosdeser.component';
import { NotasComponent } from './pages/notas/notas.component';
import { NotaspComponent } from './pages/notasp/notasp.component';

export const routes: Routes = [
 
  {path: 'quienes-somos', component: QuienessomosComponent},
  {path: 'politicadepriv', component: PoliticadeprivComponent},
  {path: 'iniciar-sesion', component: IniciarsesionComponent},
  {path: 'terminosdeser', component: TerminosdeserComponent},
  {path: 'notas', component: NotasComponent},
  {path: 'notasp', component: NotaspComponent},
];
