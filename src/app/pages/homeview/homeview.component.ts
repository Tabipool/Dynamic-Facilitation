import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeratorDetailedComponent } from 'app/components/moderator-detailed/moderator-detailed.component';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { MeetingHome } from 'app/state/meetings/meetings.states';
import { Moderator } from 'app/state/moderator/moderator.states';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.scss'],
})
export class HomeviewComponent implements OnInit {
  constructor(
    private router: Router,
    private restService: RESTAPIServiceService,
    private overlay: Overlay
  ) {}

  public meetings: MeetingHome[];
  public moderators: Moderator[];

  ngOnInit() {
    this.restService.getMeetingsByModerator(1).subscribe(
      (data) => {
        this.meetings = data;
      },
      (error) => console.log(error)
    );

    this.restService.getModerators().subscribe(
      (data) => {
        this.moderators = data;
      },
      (error) => console.log(error)
    );
  }

  newSession() {
    this.router.navigate(['/flipcharts']);
  }

  openInput(e: any) {
    const target = document.querySelector('.moderatorAdd') as HTMLElement;
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      panelClass: 'mat-elevation-z8',
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(target)
        .withPositions([
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
            offsetX: 50,
          },
        ]),
    });
    const inputOverlay = new ComponentPortal(ModeratorDetailedComponent);
    const componentRef = overlayRef.attach(inputOverlay);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
    console.log(target);
  }
}
