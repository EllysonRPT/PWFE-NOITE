import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculoComponent } from './view/curriculo/curriculo.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { FooterComponent } from './basic/footer/footer.component';
import { HeaderComponent } from './basic/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { FormsModule } from '@angular/forms';
import { PainelCurriculoComponent } from './view/painel-curriculo/painel-curriculo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CurriculoComponent,
    VagasComponent,
    FooterComponent,
    HeaderComponent,
    PainelVagasComponent,
    PainelCurriculoComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
