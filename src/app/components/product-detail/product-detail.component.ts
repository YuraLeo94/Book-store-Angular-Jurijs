import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAX_AMOUNT, MIN_AMOUNT } from 'src/app/shared/global.const';
import { ShoppingDialogComponent } from '../dialogs/shopping-dialog/shopping-dialog.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent {

  public minAmount = MIN_AMOUNT;
  public maxAmount = MAX_AMOUNT;
  public count = this.minAmount;
  //TO DO starRating replace hardcoded value with value from db
  public starRating = 3;
  public maxRating = 5;
  public isAddToCart = true;

  constructor(private dialog: MatDialog) {
  }

  public addToCart():void {
    // TO DO for this was created a special task "Implement functionality for product details component" 
    // https://trello.com/c/f4XHSHb6/14-implement-functionality-for-product-details-component
    console.log("add to cart");
    this.dialog.open(ShoppingDialogComponent);
  }

  public getRating(): void {
    // TO DO save rating value to the bd
    // https://trello.com/c/f4XHSHb6/14-implement-functionality-for-product-details-component
    console.log("starRating", this.starRating);
  }

  public disableEnableAddToCart(): void {
    if (this.count) {
      this.isAddToCart = true
    } else {
      this.isAddToCart = false
    }
  }
}
