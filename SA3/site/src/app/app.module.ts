import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { SearchComponent } from './views/search/search.component';
import { AccountComponent } from './views/account/account.component';
import { CartComponent } from './views/cart/cart.component';
import { ContactComponent } from './views/contact/contact.component';
import { DestaqueClienteComponent } from './components/destaque-cliente/destaque-cliente.component';
import { BannerLogoComponent } from './components/banner-logo/banner-logo.component';
import { BannerSobreComponent } from './components/banner-sobre/banner-sobre.component';
import { BannerProdutoComponent } from './components/banner-produto/banner-produto.component';
import { DestaqueProdutosComponent } from './components/destaque-produtos/destaque-produtos.component';
import { MenuNavegacaoComponent } from './components/menu-navegacao/menu-navegacao.component';
import { BannerNovidadeComponent } from './components/banner-novidade/banner-novidade.component';
import { DestaquePesquisaComponent } from './components/destaque-pesquisa/destaque-pesquisa.component';
import { DestaqueBoletimComponent } from './components/destaque-boletim/destaque-boletim.component';
import { GaleriaProdutosComponent } from './components/galeria-produtos/galeria-produtos.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';

import {MatInputModule} from '@angular/material/input';

import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    AccountComponent,
    CartComponent,
    ContactComponent,
    DestaqueClienteComponent,
    BannerLogoComponent,
    BannerSobreComponent,
    BannerProdutoComponent,
    DestaqueProdutosComponent,
    MenuNavegacaoComponent,
    BannerNovidadeComponent,
    DestaquePesquisaComponent,
    DestaqueBoletimComponent,
    GaleriaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
