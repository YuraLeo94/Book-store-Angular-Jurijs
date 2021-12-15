import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCost.PipeComponent } from './display-cost.pipe.component';

describe('DisplayCost.PipeComponent', () => {
  let component: DisplayCost.PipeComponent;
  let fixture: ComponentFixture<DisplayCost.PipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCost.PipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCost.PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
