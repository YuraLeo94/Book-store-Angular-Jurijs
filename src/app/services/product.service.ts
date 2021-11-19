import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsApiUrl);
  }

  updateProducts(product: Product): Observable<Product> {
    const url = `${this.productsApiUrl}/${product.id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }
}
