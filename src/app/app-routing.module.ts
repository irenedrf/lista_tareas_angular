import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteDosComponent } from './componente-dos/componente-dos.component';
import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/formulario' },
  { path: 'formulario', component: ComponenteUnoComponent },
  { path: 'lista', component: ComponenteDosComponent },
  { path: '**', redirectTo: '/formulario' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
