import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { Route, Routes } from '@angular/router';
import { FormularioComponent } from './cadastro/formulario.component';
const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'Footer',component:FooterComponent},
  {path: 'Header',component:HeaderComponent},
  {path: 'home',component:HomeComponent},

  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    SobreComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
