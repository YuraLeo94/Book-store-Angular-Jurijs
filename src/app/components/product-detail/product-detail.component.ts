import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  count: number = 1;
  //TO DO starRating replace hardcoded value with value from db
  starRating: number = 3;
  isAddToCart: boolean = true;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public addToCart() {
    // TO DO for this was created a special task "Implement functionality for product details component" 
    // https://trello.com/c/f4XHSHb6/14-implement-functionality-for-product-details-component
    console.log("add to cart");
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
