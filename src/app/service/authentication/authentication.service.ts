import { Injectable } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from 'app/service/authentication/signInData';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RESTAPIServiceService } from '../restapiservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userProfile: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({
    id: 0,
    username: '',
    name: '',
    lastname: '',
    picturePath: new URL(''),
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
    this.userProfile.next(user);
    localStorage.setItem('user-profile', JSON.stringify(user));
  }

  loadUserFromLocalStorage(): UserModel {
    if (this.userProfile.value.id == 0) {
      let fromLocalStorage = localStorage.getItem('user-profile');
      if (fromLocalStorage) {
        let userInfo = JSON.parse(fromLocalStorage);
        this.userProfile.next(userInfo);
      }
    }
    return this.userProfile.value;
  }
}
