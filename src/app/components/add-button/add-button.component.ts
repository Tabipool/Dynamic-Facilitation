import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-button',
  template: ` <button type="button" (click)="(null)" [ngClass]="classes">
    +
  </button>`,
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent {
  @Input()
  flipchart = true;

  public get classes(): string[] {
    const mode = this.flipchart
      ? 'add-button__flipchart'
      : 'add-button__issues';

    return ['add-button', mode];
  }
}
