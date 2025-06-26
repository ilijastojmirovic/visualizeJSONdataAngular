import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryPiechartComponent } from './time-entry-piechart.component';

describe('TimeEntryPiechartComponent', () => {
  let component: TimeEntryPiechartComponent;
  let fixture: ComponentFixture<TimeEntryPiechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeEntryPiechartComponent]
    });
    fixture = TestBed.createComponent(TimeEntryPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
