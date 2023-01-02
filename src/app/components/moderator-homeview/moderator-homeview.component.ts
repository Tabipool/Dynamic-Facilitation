import { Component, Input, OnInit } from '@angular/core';
import { Moderator } from 'app/state/moderator/moderator.states';

@Component({
  selector: 'app-moderator-homeview',
  templateUrl: './moderator-homeview.component.html',
  styleUrls: ['./moderator-homeview.component.scss'],
})
export class ModeratorHomeviewComponent implements OnInit {
  @Input() moderator: Moderator;

  constructor() {}

  ngOnInit(): void {}
}
