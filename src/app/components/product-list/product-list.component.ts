import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  constructor(private productService: ProductService) { }

  public ngOnInit(): void {
    this.productService.getProducts().add(() => (this.products = this.productService.productData));
  }

  public openProductDetail(product: Product): void {
    this.productService.detailsOfSelectedProduct = product;
  }
}
