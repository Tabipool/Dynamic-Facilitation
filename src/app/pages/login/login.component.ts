import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'app/service/authentication/signInData';
import { AuthenticationService } from 'app/service/authentication/authentication.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUser: any = {
    username: '',
    password: '',
  };
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let authFlow = this.authenticationService
      .authenticate(this.loginUser)
      .pipe(switchMap(() => this.authenticationService.profile()));

    authFlow.subscribe({
      next: (user: UserModel) => {
        this.authenticationService.saveUserToLocalStorage(user);
        console.log(user);
      },
      error: (error) => {
        console.log(error);
      },
    });

    /*if (signInForm.invalid) {
      alert('Überprüfen Sie Ihre Eingabe.');
    }
    const signInData = new SignInData(
      signInForm.value.username,
      signInForm.value.password
    );
    this.authenticationService
      .Authenticate(signInData)
      .subscribe((response) => {
        this.router.navigate(['/home']);
      });*/
  }
}
