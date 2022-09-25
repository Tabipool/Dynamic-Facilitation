import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  faHouse,
  faAngleDown,
  faEllipsis,
  faPlus,
  faFloppyDisk,
  faStar,
  faBookmark,
  faX,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  faHouse = faHouse;
  faAngleDown = faAngleDown;
  faEllipsis = faEllipsis;
  faPlus = faPlus;
  faFloppyDisk = faFloppyDisk;
  faStar = faStar;
  faBookmark = faBookmark;
  faX = faX;
  faUsers = faUsers;

  goToHomeview() {
    this.router.navigate(['/home']);
  }

  @Input() flipchart: boolean | undefined;
}
