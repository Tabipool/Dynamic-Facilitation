import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorHomeviewComponent } from './moderator-homeview.component';

describe('ModeratorHomeviewComponent', () => {
  let component: ModeratorHomeviewComponent;
  let fixture: ComponentFixture<ModeratorHomeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorHomeviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeratorHomeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
