import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product.type';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsApiUrl = 'http://localhost:5000/products';
  private productData: Product[] = [];
  private activeProduct: Product;

  constructor(private http: HttpClient) { }

  public getProducts(): Subscription {
    return this.http.get<Product[]>(this.productsApiUrl).subscribe((products) => (this.productData = products));
  }

  public updateProducts(product: Product): Observable<Product> {
    const url = `${this.productsApiUrl}/${product.id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }

  public getProductData(): Product[] {
    return this.productData;
  }

  public setActiveProduct(product: Product): void {
    this.activeProduct = product;
  }

  public get ActiveProduct(): Product {
    return this.activeProduct;
  }
}
