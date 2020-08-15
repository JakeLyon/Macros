import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdroptestComponent } from './dragdroptest.component';

describe('DragdroptestComponent', () => {
  let component: DragdroptestComponent;
  let fixture: ComponentFixture<DragdroptestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragdroptestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdroptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
