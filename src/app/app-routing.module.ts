import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'product-details', component: ProductDetailComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'back-button', loadChildren: () => import('./modules/back-button/back-button.module').then(m => m.BackButtonModule) },
  { path: 'checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'checkout-product-card', loadChildren: () => import('./modules/checkout-product-card/checkout-product-card.module').then(m => m.CheckoutProductCardModule) },
  { path: 'completed-dialog', loadChildren: () => import('./modules/dialogs/completed-dialog/completed-dialog.module').then(m => m.CompletedDialogModule) },
  { path: 'shopping-dialog', loadChildren: () => import('./modules/dialogs/shopping-dialog/shopping-dialog.module').then(m => m.ShoppingDialogModule) },
  { path: 'header', loadChildren: () => import('./modules/header/header.module').then(m => m.HeaderModule) },
  { path: 'order-form', loadChildren: () => import('./modules/order-form/order-form.module').then(m => m.OrderFormModule) },
  { path: 'product-card', loadChildren: () => import('./modules/product-card/product-card.module').then(m => m.ProductCardModule) },
  { path: 'product-cart', loadChildren: () => import('./modules/product-cart/product-cart.module').then(m => m.ProductCartModule) },
  { path: 'product-detail', loadChildren: () => import('./modules/product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  { path: 'product-list', loadChildren: () => import('./modules/product-list/product-list.module').then(m => m.ProductListModule) },
  { path: 'shopping-card', loadChildren: () => import('./modules/shopping-card/shopping-card.module').then(m => m.ShoppingCardModule) },
  { path: 'shopping-cart', loadChildren: () => import('./modules/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
  { path: 'global.const', loadChildren: () => import('./modules/shared/global.const/global.const.module').then(m => m.Global.ConstModule) },
  { path: 'display-cost.pipe', loadChildren: () => import('./modules/pipe/display-cost.pipe/display-cost.pipe.module').then(m => m.DisplayCost.PipeModule) },
  { path: 'truncate.pipe', loadChildren: () => import('./modules/pipe/truncate.pipe/truncate.pipe.module').then(m => m.Truncate.PipeModule) },
  { path: '**', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
