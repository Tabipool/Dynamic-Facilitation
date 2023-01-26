import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { Moderator } from 'app/state/moderator/moderator.states';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-moderator-detailed',
  templateUrl: './moderator-detailed.component.html',
  styleUrls: ['./moderator-detailed.component.scss'],
})
export class ModeratorDetailedComponent implements OnInit {
  constructor(private restService: RESTAPIServiceService) {}

  ngOnInit(): void {}

  private newModerator: Moderator = new Moderator();

  addNewModerator(
    username: string,
    firstname: string,
    lastname: string,
    password: string,
    checkpw: string
  ) {
    if (
      password == checkpw &&
      username != '' &&
      firstname != '' &&
      lastname != '' &&
      password != ''
    ) {
      this.newModerator.username = username;
      this.newModerator.name = firstname;
      this.newModerator.lastname = lastname;
      this.newModerator.password = password;

      this.restService
        .postModerator(this.newModerator) //.subscribe(moderator => this.moderators.push(moderator))
        .subscribe((error) => console.log(error));
    } else {
      alert('Die Passwörter stimmen nicht überein');
    }
  }
}
