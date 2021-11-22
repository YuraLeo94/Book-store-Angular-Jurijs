import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  //TO DO by default set data from store
  public products: Product[] = [];
  constructor(public productService: ProductService) { }

  public ngOnInit(): void {
    // TO DO update store data
    this.productService.getProducts().subscribe((products) => (this.products = products));
  }

  public openProductDetail(product: Product): void {
    //TODO: with routing this method will be updated
    console.log("openProductDetail", product);
  }
}
