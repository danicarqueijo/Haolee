import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { EntrarComponent } from './pages/entrar/entrar.component';
import { HomeComponent } from './pages/home/home.component';
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



const routes: Routes = [
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'produtos/bermudas', component: BermudasComponent },
  {path: 'produtos/biquinis', component:  BiquinisComponent },
  {path: 'produtos/maios', component: MaiosComponent },
  {path: 'produtos/macacao', component: MacacaoComponent },
  {path: 'produtos/poncho', component: PonchoComponent  },
  {path: 'produtos/capas', component: CapasComponent },
  {path: 'produtos/decks', component:  DecksComponent },
  {path: 'produtos/parafina', component:  ParafinasComponent },
  {path: 'produtos/prancha', component: PranchasComponent },
  {path: 'produtos/quilhas', component: QuilhasComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
