import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalElementsComponent } from './global-elements.component';

describe('GlobalElementsComponent', () => {
  let component: GlobalElementsComponent;
  let fixture: ComponentFixture<GlobalElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
