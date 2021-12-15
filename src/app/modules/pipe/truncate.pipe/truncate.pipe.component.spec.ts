import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Truncate.PipeComponent } from './truncate.pipe.component';

describe('Truncate.PipeComponent', () => {
  let component: Truncate.PipeComponent;
  let fixture: ComponentFixture<Truncate.PipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Truncate.PipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Truncate.PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
