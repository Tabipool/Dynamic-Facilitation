import { Injectable } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { SignInData } from 'app/components/signInData';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly mockedUser = new SignInData('MaxMuster', 'test123');
  isAuthenticated = false;

  constructor() {}

  Authenticate(signInData: SignInData): boolean {
    if (this.CheckCredentials(signInData)) {
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
    );
  }
}
