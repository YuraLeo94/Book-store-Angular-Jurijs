import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.type';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.less']
})
export class ShoppingCardComponent {

  @Input() product: Product;
  public minAmount = 1;
  public maxAmount = 1000;
  // TO DO replace hardcode count data with data from store
  public count = 1;

  public onDelete(): void {
    //TO DO https://trello.com/c/uXgRDIDk/15-implement-functionality-for-shopping-cart-component
    console.log("onDelete", this.product);
  }
}
