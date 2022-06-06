import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanJoinGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // check, nếu là admin thì cho join vào admin, nếu không thig điều hướng qua client
      const User = localStorage.getItem('User')
      if(User){
        return true;
      }
      this.router.navigateByUrl('/signup')
      return false;
    
  }
  
}
