import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryTableComponent } from './time-entry-table.component';

describe('TimeEntryTableComponent', () => {
  let component: TimeEntryTableComponent;
  let fixture: ComponentFixture<TimeEntryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeEntryTableComponent]
    });
    fixture = TestBed.createComponent(TimeEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
