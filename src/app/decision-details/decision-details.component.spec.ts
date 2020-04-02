import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionDetailsComponent } from './decision-details.component';

describe('DecisionsComponent', () => {
  let component: DecisionDetailsComponent;
  let fixture: ComponentFixture<DecisionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
