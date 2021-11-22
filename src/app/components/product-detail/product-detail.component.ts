import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/product.type';
import { ProductService } from 'src/app/services/product.service';
import { MAX_AMOUNT, MIN_AMOUNT } from 'src/app/shared/global.const';
import { ShoppingDialogComponent } from '../dialogs/shopping-dialog/shopping-dialog.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;
  public minAmount = MIN_AMOUNT;
  public maxAmount = MAX_AMOUNT;
  public count = this.minAmount;
  public starRating: number;
  public maxRating = 5;
  public isAddToCart = true;

  constructor(private dialog: MatDialog, public productService: ProductService) {
  }

  public ngOnInit(): void {
    this.product = this.productService.ActiveProduct;
    this.starRating = this.product.rating;
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
    const product = {...this.product, rating: this.starRating};
    console.log("updateProd", product);
    this.productService.updateProducts(product);
  }

  public disableEnableAddToCart(): void {
    if (this.count) {
      this.isAddToCart = true
    } else {
      this.isAddToCart = false
    }
  }
}
