import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products.const';
import { Product } from 'src/app/product.type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products: Product[] = PRODUCTS;
  constructor() { }

  public ngOnInit(): void {
  }

  public openProductDetail(product: Product): void {
    //TODO: with routing this method will be updated
    console.log("openProductDetail", product);
  }
}
