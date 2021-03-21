import { QuestionBase } from "../models/question-base";

export class QuestionDropdown extends QuestionBase<string>{
    controlType = 'dropdown';
}