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
  test:any;
  constructor(public productService: ProductService) { }

  public ngOnInit(): void {
    this.productService.getProducts().add(() => (this.products = this.productService.getProductData()));
  }

  public openProductDetail(product: Product): void {
    this.productService.setActiveProduct(product);
    console.log("openProductDetail", product);
  }
}
