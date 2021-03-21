import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponentComponent } from './dynamic-form-component.component';

describe('DynamicFormComponentComponent', () => {
  let component: DynamicFormComponentComponent;
  let fixture: ComponentFixture<DynamicFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
