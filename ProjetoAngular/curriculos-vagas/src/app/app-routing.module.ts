import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelCurriculoComponent } from './view/painel-curriculo/painel-curriculo.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { CurriculoComponent } from './view/curriculo/curriculo.component';

const routes: Routes = [
  { path: '', component: InicioComponent}, // Rota para a página inicial
  { path: 'curriculos', component: CurriculoComponent }, // Rota para currículos
  { path: 'vagas', component: VagasComponent }, // Rota para vagas
  { path: 'Painelcurriculo', component: PainelCurriculoComponent }, // Rota para vagas
{path:'Painelvagas', component: PainelVagasComponent}  
];
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }