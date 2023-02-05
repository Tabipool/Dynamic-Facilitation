import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemListService } from 'app/service/item-list.service';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { MeetingHome } from 'app/state/meetings/meetings.states';
import { Store } from '@ngrx/store';
import { State } from 'app/state';
import { MeetingService } from 'app/state/meetings/meeting.service';
import { Item } from 'app/state/Items/item.states';
import { chartType } from 'types/chartType';
import { addItemAction } from 'app/state/Items/item.actions';

@Component({
  selector: 'app-homeview-meeting',
  templateUrl: './homeview-meeting.component.html',
  styleUrls: ['./homeview-meeting.component.scss'],
})
export class HomeviewMeetingComponent implements OnInit {
  @Input() meeting: MeetingHome;

  constructor(
    private router: Router,
    private restService: RESTAPIServiceService,
    private _itemListService: ItemListService,
    private store: Store<State>,
    private activeMeeting: MeetingService
  ) {}

  ngOnInit(): void {}

  openMeeting() {
    this.router.navigate(['/flipcharts']);

    this.restService.getMeetingById(this.meeting.id).subscribe(
      (data) => {
        this.activeMeeting = data;
      },
      (error) => console.log(error)
    );

    this.initializeMockData();
  }

  initializeMockData() {
    let items: Item[] = [
      {
        number: 1,
        description: 'Wie hält man eine gute DigBiz-Präsentation?',
        type: chartType.p,
        color: 'shift-blue',
        ofCourse: false,
        bookmark: false,
      },
      {
        number: 2,
        description: 'DigBiz-Award findet am 9. Februar statt.',
        type: chartType.i,
        color: 'shift-blue',
        ofCourse: true,
        bookmark: false,
      },
      {
        number: 3,
        description: 'Ich bin immer sehr nervös auf der Bühne.',
        type: chartType.b,
        color: 'shift-blue',
        ofCourse: false,
        bookmark: false,
      },
      {
        number: 4,
        description: 'Wie kann man Nervosität verringern?',
        type: chartType.p,
        color: 'shift-turquoise',
        ofCourse: false,
        bookmark: false,
      },
      {
        number: 5,
        description: 'Präsentation vorher viel üben.',
        type: chartType.l,
        color: 'shift-turquoise',
        ofCourse: false,
        bookmark: false,
      },
      {
        number: 6,
        description: 'PowerPoint muss vorbereitet werden.',
        type: chartType.i,
        color: 'shift-orange',
        ofCourse: false,
        bookmark: false,
      },
      {
        number: 7,
        description: 'Die PowerPoint muss interessant aussehen.',
        type: chartType.p,
        color: 'shift-orange',
        ofCourse: false,
        bookmark: false,
      },
      {
        number: 8,
        description: 'Dem Designer freien lauf lassen.',
        type: chartType.l,
        color: 'shift-orange',
        ofCourse: false,
        bookmark: true,
      },
      {
        number: 9,
        description: 'Auf der PowerPoint darf nicht viel Text sein.',
        type: chartType.b,
        color: 'shift-orange',
        ofCourse: false,
        bookmark: false,
      },
      {
        number: 10,
        description: 'Umso weniger Text auf der PowerPoint umso besser.',
        type: chartType.i,
        color: 'shift-orange',
        ofCourse: false,
        bookmark: false,
      },
      {
        number: 11,
        description: 'Was muss bei der Präsentation alles gesagt werden?',
        type: chartType.p,
        color: 'shift-yellow',
        ofCourse: false,
        bookmark: false,
      },
      {
        number: 12,
        description: 'Die vorgegebenen Themen müssen eingehalten werden.',
        type: chartType.i,
        color: 'shift-yellow',
        ofCourse: true,
        bookmark: false,
      },
      {
        number: 13,
        description: 'Genaue Themen mit Lehreren absprechen.',
        type: chartType.l,
        color: 'shift-yellow',
        ofCourse: false,
        bookmark: false,
      },
      {
        number: 14,
        description: 'Lehrer sind selber im Stress.',
        type: chartType.b,
        color: 'shift-blue',
        ofCourse: false,
        bookmark: false,
      },
    ];

    for (let index = 0; index < items.length; index++) {
      this.store.dispatch(addItemAction({ item: items[index] }));
    }
  }
}
