import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedDialogComponent } from './completed-dialog.component';

describe('CompletedDialogComponent', () => {
  let component: CompletedDialogComponent;
  let fixture: ComponentFixture<CompletedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
