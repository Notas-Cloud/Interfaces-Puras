import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNotasComponent } from './block-notas.component';

describe('BlockNotasComponent', () => {
  let component: BlockNotasComponent;
  let fixture: ComponentFixture<BlockNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockNotasComponent]
    });
    fixture = TestBed.createComponent(BlockNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
