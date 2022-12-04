import { Component, OnInit } from '@angular/core';
import { ChartStateService } from 'app/state/chart-states/chart-states.service';
import { chartType } from '../../../types/chartType';

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

  typeOfChart: typeof chartType = chartType;

  constructor(public _chartStateService: ChartStateService) {}

  ToggleInput() {
    this.addingItem = !this.addingItem;
  }

  ngOnInit(): void {}
}
