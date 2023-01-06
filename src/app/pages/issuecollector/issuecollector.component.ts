import { Component, OnInit } from '@angular/core';
import { Issue } from 'app/state/issues/issue.states';

@Component({
  selector: 'app-issuecollector',
  templateUrl: './issuecollector.component.html',
  styleUrls: ['./issuecollector.component.scss'],
})
export class IssuecollectorComponent implements OnInit {
  issues: Issue[] = [];
  addingIssue: boolean = false;
  counter: number = 1;

  disabledVote: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  ToggleInput() {
    this.addingIssue = !this.addingIssue;
  }

  cancelSubmit() {
    this.addingIssue = false;
  }

  issueSubmit(issue: { description: string }) {
    let newIssue: Issue = new Issue();
    this.addingIssue = false;
    newIssue.number = this.counter;
    newIssue.description = issue.description;

    this.issues.push(newIssue);
    console.log(newIssue);

    this.counter++;
  }
}
