import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { InicioComponent } from './inicio/inicio.component';
import { VagasComponent } from '../vagas/vagas.component';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';

const routes: Routes = [
  { path: '', component: InicioComponent}, // Rota para a página inicial
  { path: 'curriculos', component: CurriculoComponent }, // Rota para currículos
  { path: 'vagas', component: VagasComponent }, // Rota para vagas
{path:'Painelvagas', component: PainelVagasComponent}  
];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }