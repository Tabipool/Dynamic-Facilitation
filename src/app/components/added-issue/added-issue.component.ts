import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'app/state/issues/issue.states';

@Component({
  selector: 'app-added-issue',
  templateUrl: './added-issue.component.html',
  styleUrls: ['./added-issue.component.scss'],
})
export class AddedIssueComponent implements OnInit {
  @Input() newIssue: Issue;

  editItem: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
