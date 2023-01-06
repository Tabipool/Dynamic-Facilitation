import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() flipchart = true;

  @Output() submitCanceled = new EventEmitter();
  @Output() submitIssue = new EventEmitter<{
    description: string;
  }>();
  @Input() counter: number;

  @ViewChild('textInput') issueInput!: ElementRef<HTMLInputElement>;

  SubmitIssue() {
    if (this.issueInput.nativeElement.value != '') {
      this.submitIssue.emit({
        description: this.issueInput.nativeElement.value,
      });
    }
  }

  CancelSubmit() {
    this.issueInput.nativeElement.value = '';
    this.submitCanceled.emit();
  }
}
