import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ColorService } from 'app/state/color-state/color-state.service';

@Component({
  selector: 'app-item-flipchart',
  templateUrl: './item-flipchart.component.html',
  styleUrls: ['../item.component.scss'],
})
export class ItemFlipchartComponent implements AfterViewInit {
  @Output() submitCanceled = new EventEmitter();
  @Output() submitItem = new EventEmitter<{
    description: string;
    color: string;
  }>();
  @Input() counter: number;

  @ViewChild('textInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('shiftBlue') colorRadio: ElementRef<HTMLInputElement>;

  constructor(public _colorService: ColorService) {}

  ngAfterViewInit(): void {
    const inputField = this.itemInput.nativeElement as HTMLInputElement;
    inputField.focus();
  }

  changeColor(e: Event) {
    this._colorService.changeColor((e.currentTarget as HTMLInputElement).id);

    //if random then execute get random color()
  }

  SubmitItem() {
    if (this.itemInput.nativeElement.value != '') {
      this.submitItem.emit({
        description: this.itemInput.nativeElement.value,
        color: this._colorService.color,
      });
    }
  }

  CancelSubmit() {
    this.itemInput.nativeElement.value = '';
    this.colorRadio.nativeElement.checked = true;
    this.submitCanceled.emit();
  }
}
