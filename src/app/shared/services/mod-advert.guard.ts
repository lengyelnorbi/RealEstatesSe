import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModAdvertGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const modifiableAdv = JSON.parse(localStorage.getItem('modifiableAdv') as string);
      if(modifiableAdv && modifiableAdv != 'null'){
        return true;
      }
      this.router.navigateByUrl('/not-found');
      return false;
  }
  
}
