import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte3Component } from './parte3.component';

describe('Parte3Component', () => {
  let component: Parte3Component;
  let fixture: ComponentFixture<Parte3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parte3Component]
    });
    fixture = TestBed.createComponent(Parte3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
