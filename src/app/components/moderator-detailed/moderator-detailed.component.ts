import { IfStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { Moderator } from 'app/state/moderator/moderator.states';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-moderator-detailed',
  templateUrl: './moderator-detailed.component.html',
  styleUrls: ['./moderator-detailed.component.scss'],
})
export class ModeratorDetailedComponent implements OnInit {
  @ViewChild(MatMenu, { read: MatMenu }) menu: MatMenu;
  constructor(private restService: RESTAPIServiceService) {}

  ngOnInit(): void {}

  private newModerator: Moderator = new Moderator();

  addNewModerator(
    username: string,
    firstname: string,
    lastname: string,
    password: string,
    checkpw: string,
    event: any
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
    } else if (password != checkpw) {
      alert('Die Passwörter stimmen nicht überein');
      this.stopPropagation(event);
    } else {
      alert('Bitte überprüfen Sie Ihre Eingabe.');
      this.stopPropagation(event);
    }
  }

  stopPropagation(event: any) {
    event.stopPropagation();
  }
}
