import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { typeSignUp, typeUser } from '../type/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  
  signup(data: typeUser): Observable<typeSignUp>{
    return this.http.post<typeSignUp>(`${environment.signup}`,data)
  }
}
