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
  private _productData: Product[] = [];
  private _detailsOfSelectedProduct: Product;

  constructor(private http: HttpClient) { }

  public getProducts(): Subscription {
    return this.http.get<Product[]>(this.productsApiUrl).subscribe((products) => (this._productData = products));
  }

  public updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsApiUrl}/${product.id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }

  public get productData(): Product[] {
    return this._productData;
  }

  public set detailsOfSelectedProduct(product: Product) {
    this._detailsOfSelectedProduct = product;
  }

  public get detailsOfSelectedProduct(): Product {
    return this._detailsOfSelectedProduct;
  }
}
