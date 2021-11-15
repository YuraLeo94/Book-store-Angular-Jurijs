import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products.const';
import { Product } from 'src/app/product.type';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})

export class ShoppingCartComponent {

  mockShoppingCartData: Product[] = PRODUCTS;

  public onCheckout(): void {
    console.log("onCheckout", this.mockShoppingCartData);
  }
}
