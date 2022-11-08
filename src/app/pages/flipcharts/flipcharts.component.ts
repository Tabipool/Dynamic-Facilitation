import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipcharts',
  templateUrl: './flipcharts.component.html',
  styleUrls: ['./flipcharts.component.scss'],
})
export class FlipchartsComponent implements OnInit {
  problem: any[] = [];
  info_data: any[] = [];
  thoughts: any[] = [];
  solutions: any[] = [];

  addingItem: boolean = false;

  constructor() {}

  ToggleInput() {
    this.addingItem = !this.addingItem;
  }

  ngOnInit(): void {}
}
