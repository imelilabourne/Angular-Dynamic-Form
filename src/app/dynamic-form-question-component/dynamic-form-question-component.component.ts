import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../models/question-base';

@Component({
  selector: 'dynamic-form-question-component',
  templateUrl: './dynamic-form-question-component.component.html',
  styleUrls: ['./dynamic-form-question-component.component.css']
})
export class DynamicFormQuestionComponentComponent implements OnInit {

  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;

  
  constructor() { }

  ngOnInit() {
  }

  get isValid(){
    return this.form.controls[this.question.key].valid;
  }

}
