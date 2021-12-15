import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Global.ConstComponent } from './global.const.component';

describe('Global.ConstComponent', () => {
  let component: Global.ConstComponent;
  let fixture: ComponentFixture<Global.ConstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Global.ConstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Global.ConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
