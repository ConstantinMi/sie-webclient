import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContCreateComponent } from './cont-create.component';

describe('ContCreateComponent', () => {
  let component: ContCreateComponent;
  let fixture: ComponentFixture<ContCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
