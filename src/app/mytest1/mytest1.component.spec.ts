import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mytest1Component } from './mytest1.component';

describe('Mytest1Component', () => {
  let component: Mytest1Component;
  let fixture: ComponentFixture<Mytest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mytest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mytest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
