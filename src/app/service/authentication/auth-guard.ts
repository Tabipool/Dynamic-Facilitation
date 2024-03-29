import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let userInfo = this.authService.loadUserFromLocalStorage();
    if (route.data['userType'] === 'guest') {
      return true;
    } else if (route.data['userType'] === 'logged-in') {
      if (userInfo.acc_id > 0) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    } else if (route.data['userType'] === 'non-logged-in') {
      if (userInfo.acc_id === 0) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    }
    this.router.navigate(['/']);
    return false;
  }
}
