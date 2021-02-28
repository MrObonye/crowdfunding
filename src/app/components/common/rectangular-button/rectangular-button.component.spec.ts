import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularButtonComponent } from './rectangular-button.component';

describe('RectangularButtonComponent', () => {
  let component: RectangularButtonComponent;
  let fixture: ComponentFixture<RectangularButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangularButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangularButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
