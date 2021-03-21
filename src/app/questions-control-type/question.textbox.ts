import { QuestionBase } from "../models/question-base";

export class QuestionTextBox extends QuestionBase<string>{
    controlType = 'textbox';
}