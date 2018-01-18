import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RnfrComponent } from './rnfr.component';

describe('RnfrComponent', () => {
  let component: RnfrComponent;
  let fixture: ComponentFixture<RnfrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RnfrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RnfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
