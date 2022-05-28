import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Publicacion2Component } from './publicacion2.component';

describe('Publicacion2Component', () => {
  let component: Publicacion2Component;
  let fixture: ComponentFixture<Publicacion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Publicacion2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Publicacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
