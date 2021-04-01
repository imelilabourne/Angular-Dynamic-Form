import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../models/question-base';
import { QuestionControlService } from '../services/question-control.service';

@Component({
  selector: 'dynamic-form-component',
  templateUrl: './dynamic-form-component.component.html',
  styleUrls: ['./dynamic-form-component.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponentComponent implements OnInit {

  @Input() questions: QuestionBase<string>[]  = [];

  form: FormGroup;

  payload: string = '';
  constructor(private controlService: QuestionControlService) { }

  ngOnInit() {
    this.form = this.controlService.toFormGroup(this.questions);
  }

  // to get form's value
  onSubmit(){
    this.payload = this.form.value;
  }
}
