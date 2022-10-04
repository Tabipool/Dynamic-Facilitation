import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from 'app/components/signInData';
import { AuthenticationService } from 'app/service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  onSubmit(signInForm: NgForm) {
    const signInData = new SignInData(
      signInForm.value.username,
      signInForm.value.password
    );
    this.authenticationService.Authenticate(signInData);
    console.log(this.authenticationService.isAuthenticated);
  }
}
