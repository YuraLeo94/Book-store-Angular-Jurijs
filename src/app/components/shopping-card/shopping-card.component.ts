import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.type';
import { MAX_AMOUNT, MIN_AMOUNT } from 'src/app/shared/global.const';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.less']
})
export class ShoppingCardComponent {

  @Input() product: Product;
  public minAmount = MIN_AMOUNT;
  public maxAmount = MAX_AMOUNT;
  // TO DO replace hardcode count data with data from store
  public count = 1;

  public onDelete(): void {
    //TO DO https://trello.com/c/uXgRDIDk/15-implement-functionality-for-shopping-cart-component
    console.log("onDelete", this.product);
  }
}
