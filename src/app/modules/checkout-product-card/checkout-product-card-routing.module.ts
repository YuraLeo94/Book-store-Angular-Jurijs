import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutProductCardComponent } from './checkout-product-card.component';

const routes: Routes = [{ path: '', component: CheckoutProductCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutProductCardRoutingModule { }
