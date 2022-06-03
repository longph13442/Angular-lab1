import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeProducts } from '../type/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // tạo câu lệnh xử lí
  constructor(private http: HttpClient) {}
  
  getProducts(): Observable<TypeProducts[]>{
    return this.http.get<TypeProducts[]>(environment.products)
  }
  // getDetailProduct(id:any): Observable<TypeProducts>{

  // }
}
