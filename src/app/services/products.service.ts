import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeCreate, TypeProducts } from '../type/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // tạo câu lệnh xử lí
  constructor(private http: HttpClient) {}

  // get all
  getProducts(): Observable<TypeProducts[]>{ // đọc kiểu dữ liệu trả về
    return this.http.get<TypeProducts[]>(environment.products) // đường dẫn api
  }
  // get a
  getProduct(id:any): Observable<TypeProducts>{
    return this.http.get<TypeProducts>(`${environment.products}/${id}`)
  }
  // remove
  deleteProduct(id:any): Observable<any>{
    return this.http.delete(`${environment.products}/${id}`)
  }
  //  add products
  createProduct(data:TypeProducts):Observable<TypeCreate>{
    return this.http.post<TypeProducts>(`${environment.products}`, data)
  }
  // update products 
  updateProduct(id:any, data:TypeProducts):Observable<TypeProducts>{
    return this.http.put<TypeProducts>(`${environment.products}/${id}`,data)
  }

}
