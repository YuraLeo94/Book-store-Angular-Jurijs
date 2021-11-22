import { Injectable } from '@angular/core';
import { Product } from '../product.type';

interface Cart {
  product: Product;
  ammount: number;
  totalSum: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart[] = [];

  constructor() { }
}
