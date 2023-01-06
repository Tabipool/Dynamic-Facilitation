import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from 'app/state/signInData';
import { AuthenticationService } from 'app/service/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(signInForm: NgForm) {
    if (signInForm.invalid) {
      console.log('help');
    }
    const signInData = new SignInData(
      signInForm.value.username,
      signInForm.value.password
    );
    this.authenticationService
      .Authenticate(signInData)
      .subscribe((response) => {
        this.router.navigate(['/home']);
      });
  }
}
