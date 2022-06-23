import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogointiComponent } from './logointi.component';

describe('LogointiComponent', () => {
  let component: LogointiComponent;
  let fixture: ComponentFixture<LogointiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogointiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogointiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
