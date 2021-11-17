import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.type';

@Component({
  selector: 'app-checkout-product-card',
  templateUrl: './checkout-product-card.component.html',
  styleUrls: ['./checkout-product-card.component.less']
})
export class CheckoutProductCardComponent {

  @Input() product: Product;

}
