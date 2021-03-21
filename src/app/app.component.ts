import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService){
    this.questions$ = service.getPersonalInfoFields();
  }
}
