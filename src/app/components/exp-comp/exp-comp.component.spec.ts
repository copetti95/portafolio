import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCompComponent } from './exp-comp.component';

describe('ExpCompComponent', () => {
  let component: ExpCompComponent;
  let fixture: ComponentFixture<ExpCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
