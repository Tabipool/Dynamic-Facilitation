import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.scss'],
})
export class HomeviewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  newSession() {
    this.router.navigate(['/flipcharts']);
  }
}
