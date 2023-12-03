import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Lazy loading
const routes: Routes = [
  {
    path : 'clients',
    loadChildren : ()=>import('./client/client.module')
                      .then(m => m.ClientModule)
  },
  {
    path : 'produits',
    loadChildren : ()=>import('./produit/produit.module')
                      .then(m => m.ProduitModule)
  },
  {
    path : 'commandes',
    loadChildren : ()=>import('./commande/commande.module')
                      .then(m => m.CommandeModule)
  },
  {path: '', redirectTo : 'client', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
