import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { Meeting } from 'app/state/meetings/meetings.states';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.scss'],
})
export class HomeviewComponent implements OnInit {
  constructor(
    private router: Router,
    private restService: RESTAPIServiceService
  ) {}

  public meetings: Meeting[];

  ngOnInit() {
    this.restService.getMeetingsByModerator(1).subscribe(
      (data) => {
        this.meetings = data;
      },
      (error) => console.log(error)
    );
  }

  newSession() {
    this.router.navigate(['/flipcharts']);
  }
}
