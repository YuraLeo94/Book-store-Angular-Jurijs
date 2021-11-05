import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  
  constructor() { }

  ngOnInit(): void {
    this.product = {...this.product, title: this.validateTitle(this.product.title)}
  }

  // If the Title exceeds 50 symbols, dots are shown
  private validateTitle(value: string): string {
    return value.length > 50 ? value.slice(0, 50) + "..." : value;
  }
}
