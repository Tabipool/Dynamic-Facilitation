import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeview-button',
  templateUrl: './homeview-button.component.html',
  styleUrls: ['./homeview-button.component.scss'],
})
export class HomeviewButtonComponent implements OnInit {
  constructor() {}

  @Input()
  buttontitle: string = '';

  ngOnInit(): void {}
}
