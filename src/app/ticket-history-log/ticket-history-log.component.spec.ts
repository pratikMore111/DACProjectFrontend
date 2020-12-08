import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketHistoryLogComponent } from './ticket-history-log.component';

describe('TicketHistoryLogComponent', () => {
  let component: TicketHistoryLogComponent;
  let fixture: ComponentFixture<TicketHistoryLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketHistoryLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketHistoryLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
