import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContListComponent } from './cont-list.component';

describe('ContListComponent', () => {
  let component: ContListComponent;
  let fixture: ComponentFixture<ContListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
