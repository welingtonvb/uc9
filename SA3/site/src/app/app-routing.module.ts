import { CartComponent } from './views/cart/cart.component';
import { ContactComponent } from './views/contact/contact.component';
import { SearchComponent } from './views/search/search.component';
import { AccountComponent } from './views/account/account.component';
import { HomeComponent } from './views/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "pesquisa", component: SearchComponent},
  { path: "conta", component: AccountComponent },
  { path: "carrinho", component: CartComponent},
  { path: "contato", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
