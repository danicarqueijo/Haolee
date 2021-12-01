import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { EntrarComponent } from './pages/entrar/entrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BermudasComponent } from './produto/paravc/bermudas/bermudas.component';
import { BiquinisComponent } from './produto/paravc/biquinis/biquinis.component';
import { MaiosComponent } from './produto/paravc/maios/maios.component';
import { MacacaoComponent } from './produto/paravc/macacao/macacao.component';
import { PonchoComponent } from './produto/paravc/poncho/poncho.component';
import { CapasComponent } from './produto/paraomar/capas/capas.component';
import { DecksComponent } from './produto/paraomar/decks/decks.component';
import { ParafinasComponent } from './produto/paraomar/parafinas/parafinas.component';
import { PranchasComponent } from './produto/paraomar/pranchas/pranchas.component';
import { QuilhasComponent } from './produto/paraomar/quilhas/quilhas.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CarrinhoComponent,
    ProdutosComponent,
    EntrarComponent,
    BermudasComponent,
    BiquinisComponent,
    MaiosComponent,
    MacacaoComponent,
    PonchoComponent,
    CapasComponent,
    DecksComponent,
    ParafinasComponent,
    PranchasComponent,
    QuilhasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
