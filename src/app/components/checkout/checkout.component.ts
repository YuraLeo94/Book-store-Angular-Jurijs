import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products.const';
import { Product } from 'src/app/product.type';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent {

  // TO DO replace mock data with data from server
  public mockCheckoutCartData: Product[] = PRODUCTS;
  public costLabel = "Total coast:";
  // TO DO replace hardcode totalCost data with data from store
  public totalCost = 119.97;
}
