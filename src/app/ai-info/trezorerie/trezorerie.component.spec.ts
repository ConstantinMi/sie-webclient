import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrezorerieComponent } from './trezorerie.component';

describe('TrezorerieComponent', () => {
  let component: TrezorerieComponent;
  let fixture: ComponentFixture<TrezorerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrezorerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrezorerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
