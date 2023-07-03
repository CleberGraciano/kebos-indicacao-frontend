import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  {
    path: 'partner',
    loadChildren: () => import('./modules/partner/partner.module').then(m => m.PartnerModule),
    data: { breadcrumb: 'Parceiros' }
  },
  {
    path: 'seller',
    loadChildren: () => import('./modules/seller/seller.module').then(m => m.SellerModule),
    data: { breadcrumb: 'Vendedores' }
  },
  {
    path: 'item',
    loadChildren: () => import('./modules/item/item.module').then(m => m.ItemModule),
    data: { breadcrumb: 'Itens' }
  },
  {
    path: 'recommendation',
    loadChildren: () => import('./modules/recommendation/recommendation.module').then(m => m.RecommendationModule),
    data: { breadcrumb: 'Indicações' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
