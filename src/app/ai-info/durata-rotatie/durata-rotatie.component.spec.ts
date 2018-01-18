import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurataRotatieComponent } from './durata-rotatie.component';

describe('DurataRotatieComponent', () => {
  let component: DurataRotatieComponent;
  let fixture: ComponentFixture<DurataRotatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurataRotatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurataRotatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
