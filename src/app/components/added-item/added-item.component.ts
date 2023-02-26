import { style } from '@angular/animations';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { RESTAPIServiceService } from 'app/service/restapiservice.service';
import { State } from 'app/state';
import { updateItemAction } from 'app/state/Items/item.actions';
import { MeetingService } from 'app/state/meetings/meeting.service';
import { Item } from '../../state/Items/item.states';
import { ItemMenuComponent } from '../item-menu/item-menu.component';

@Component({
  selector: 'app-added-item',
  templateUrl: './added-item.component.html',
  styleUrls: ['./added-item.component.scss'],
})
export class AddedItemComponent implements OnInit {
  @Input() newItem: Item = new Item();
  @Output() Item: Item = this.newItem;
  @ViewChild('coloredStripe') shiftColor: ElementRef<HTMLDivElement>;
  @ViewChild(ItemMenuComponent) itemMenu: ItemMenuComponent;
  @ViewChild('editInput') editInput: ElementRef;

  editItemStatus: boolean = false;

  color: string = this.newItem.color;

  constructor(
    private cdRef: ChangeDetectorRef,
    private store: Store<State>,
    private _restApiService: RESTAPIServiceService,
    private _meetingService: MeetingService
  ) {
    console.log(this.editItemStatus);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.shiftColor.nativeElement.style.setProperty(
      '$color',
      this.newItem.color.toString()
    );
    console.log(this.newItem.color);
  }

  editItem() {
    this.editItemStatus = true;
    this.cdRef.detectChanges();
    let inputField = this.editInput.nativeElement;

    setTimeout(function () {
      inputField.focus();
    }, 100);
  }

  saveChanges() {
    if (this.editInput.nativeElement.value.trim() != '') {
      this.editItemStatus = false;

      let updatedItem: Item = {
        number: this.newItem.number,
        description: this.editInput.nativeElement.value,
        color: this.newItem.color,
        type: this.newItem.type,
        bookmark: this.newItem.bookmark,
        ofCourse: this.newItem.ofCourse,
      };
      this._restApiService
        .putItem(updatedItem, this._meetingService.activeMeeting.id)
        .subscribe((error) => console.log(error));
      this.store.dispatch(updateItemAction({ item: updatedItem }));
    } else {
      this.editInput.nativeElement.focus();
    }
  }
}
