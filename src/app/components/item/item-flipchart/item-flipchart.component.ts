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
  selector: 'app-item-flipchart',
  templateUrl: './item-flipchart.component.html',
  styleUrls: ['../item.component.scss'],
})
export class ItemFlipchartComponent {
  activeColor: string = 'shift-blue';
  @Output() submitCanceled = new EventEmitter();
  @Output() submitItem = new EventEmitter<{
    description: string;
    color: string;
  }>();
  @Input() counter: number;

  @ViewChild('textInput') itemInput!: ElementRef<HTMLInputElement>;
  @ViewChild('shiftBlue') colorRadio!: ElementRef<HTMLInputElement>;

  constructor() {}

  changeColor(e: Event) {
    this.activeColor = (e.currentTarget as HTMLInputElement).id;

    //if random then execute get random color()
  }

  SubmitItem() {
    if (this.itemInput.nativeElement.value != '') {
      this.submitItem.emit({
        description: this.itemInput.nativeElement.value,
        color: this.activeColor,
      });
    }
  }

  CancelSubmit() {
    this.itemInput.nativeElement.value = '';
    this.colorRadio.nativeElement.checked = true;
    this.submitCanceled.emit();
  }
}
