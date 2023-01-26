import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ItemListService } from 'app/service/item-list.service';
import { State } from 'app/state';
import { CounterService } from 'app/state/counter/counter.service';
import { Issue } from 'app/state/issues/issue.states';
import { addItemAction } from 'app/state/Items/item.actions';
import { Item } from 'app/state/Items/item.states';
import { chartType } from 'types/chartType';

@Component({
  selector: 'app-added-issue',
  templateUrl: './added-issue.component.html',
  styleUrls: ['./added-issue.component.scss'],
})
export class AddedIssueComponent implements OnInit {
  @Input() newIssue: Issue;

  editItem: boolean = false;

  constructor(private router: Router, public _counterService: CounterService) {}

  ngOnInit(): void {}

  transferProblem() {
    let newItem = new Item();
    newItem.number = 1;
    newItem.description = this.newIssue.description;
    newItem.color = 'shift-blue';
    newItem.type = chartType.p;

    //this.store.dispatch(addItemAction({ item: newItem }));
    console.log(newItem);

    //this._counterService.increase();
    this.router.navigate(['/flipcharts']);
  }
}
