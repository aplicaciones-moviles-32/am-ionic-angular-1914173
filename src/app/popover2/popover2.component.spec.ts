import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popover2Component } from './popover2.component';

describe('Popover2Component', () => {
  let component: Popover2Component;
  let fixture: ComponentFixture<Popover2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popover2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Popover2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
