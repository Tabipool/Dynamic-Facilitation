import { Injectable } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { SignInData } from 'app/state/signInData';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RESTAPIServiceService } from '../restapiservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: RESTAPIServiceService) {
    const token = localStorage.getItem('auth');
    this._isLoggedIn$.next(!!token);
  }

  Authenticate(signInData: SignInData) {
    return this.apiService
      .login(signInData.getUsername(), signInData.getPassword())
      .pipe(
        tap((response: any) => {
          localStorage.setItem('auth', response.token);
        })
      );

    /*if (this.CheckCredentials(signInData)) {
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private CheckCredentials(signInData: SignInData): boolean {
    return (
      signInData.getEmail() == this.mockedUser.getEmail() &&
      signInData.getPassword() == this.mockedUser.getPassword()
    );*/
  }
}
