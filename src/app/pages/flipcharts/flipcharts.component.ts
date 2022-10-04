import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipcharts',
  templateUrl: './flipcharts.component.html',
  styleUrls: ['./flipcharts.component.scss'],
})
export class FlipchartsComponent implements OnInit {
  constructor() {
    console.log('hallo');
  }

  ngOnInit(): void {}
}
