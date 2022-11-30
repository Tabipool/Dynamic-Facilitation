import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeviewMeetingComponent } from './homeview-meeting.component';

describe('HomeviewMeetingComponent', () => {
  let component: HomeviewMeetingComponent;
  let fixture: ComponentFixture<HomeviewMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeviewMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeviewMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
