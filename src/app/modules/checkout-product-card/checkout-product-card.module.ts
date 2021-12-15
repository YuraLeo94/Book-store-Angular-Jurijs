import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutProductCardRoutingModule } from './checkout-product-card-routing.module';
import { CheckoutProductCardComponent } from './checkout-product-card.component';


@NgModule({
  declarations: [
    CheckoutProductCardComponent
  ],
  imports: [
    CommonModule,
    CheckoutProductCardRoutingModule
  ]
})
export class CheckoutProductCardModule { }
