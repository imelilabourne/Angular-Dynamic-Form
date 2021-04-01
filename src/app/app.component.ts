import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicFormComponentComponent } from './dynamic-form-component/dynamic-form-component.component';
import { QuestionBase } from './models/question-base';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ QuestionService ]
})
export class AppComponent {
  title = 'dynamic-form';
  payload;
  @ViewChild('template') template: DynamicFormComponentComponent
  questions$: Observable<QuestionBase<any>[]>;
  questions2$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService){
    this.questions$ = service.getPersonalInfoFields();

    this.questions2$ = service.getEducInfoFields();
  }

  onSubmit(){
    this.template.onSubmit(); 
    this.payload = this.template.payload;
  }
}
