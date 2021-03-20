import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import {tap} from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild, CanLoad {
  constructor(private auth: AuthService, private router: Router){}

  canLoad(){
    return this.auth.isAuthenticated$.pipe(
      tap( loggedIn => {
        if(!loggedIn){
          console.log('denegado')
          this.router.navigate(['auth'])
        }
      })
    )
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      console.log('can activated')
      return this.auth.isAuthenticated$.pipe(
        tap( loggedIn => {
          if(!loggedIn){
            console.log('denegado')
            this.router.navigate(['auth'])
          }
        })
      )

  }

}
