import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrdashboardComponent } from './usrdashboard.component';

describe('UsrdashboardComponent', () => {
  let component: UsrdashboardComponent;
  let fixture: ComponentFixture<UsrdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
