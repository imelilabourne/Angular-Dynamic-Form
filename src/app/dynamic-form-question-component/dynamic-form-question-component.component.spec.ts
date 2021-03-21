import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormQuestionComponentComponent } from './dynamic-form-question-component.component';

describe('DynamicFormQuestionComponentComponent', () => {
  let component: DynamicFormQuestionComponentComponent;
  let fixture: ComponentFixture<DynamicFormQuestionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormQuestionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormQuestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
