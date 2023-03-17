import { Injectable } from '@angular/core';
import { UserModel } from 'app/service/authentication/signInData';
import { BehaviorSubject, Observable } from 'rxjs';
import { RESTAPIServiceService } from '../restapiservice.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userProfile: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({
    acc_id: 0,
    username: '',
    name: '',
    nachname: '',
    picturePath: '',
    admin: false,
  });

  constructor(private apiService: RESTAPIServiceService) {}

  authenticate(signInData: any) {
    return this.apiService.login(signInData.username, signInData.password);
  }

  refreshCookie() {
    return this.apiService.refresh();
  }

  logout() {
    return this.apiService.logout();
  }

  profile(): Observable<UserModel> {
    return this.apiService.getUser();
  }

  saveUserToLocalStorage(user: UserModel) {
    console.log('userprofile');
    this.userProfile.next(user);
    localStorage.setItem('user-profile', JSON.stringify(user));
  }

  loadUserFromLocalStorage(): UserModel {
    if (this.userProfile.value.acc_id == 0) {
      let fromLocalStorage = localStorage.getItem('user-profile');
      if (fromLocalStorage) {
        let userInfo = JSON.parse(fromLocalStorage);
        this.userProfile.next(userInfo);
      }
    }
    return this.userProfile.value;
  }
}
