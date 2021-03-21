import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { QuestionBase } from "../models/question-base";
import { QuestionDropdown } from "../questions-control-type/question.dropdown";
import { QuestionTextBox } from "../questions-control-type/question.textbox";

@Injectable()
export class  QuestionService{
    getPersonalInfoFields(){
        const question: QuestionBase<string>[] = [
            new QuestionDropdown({
                key: 'gender',
                label: 'Gender',
                options: [
                    { key: 'm', value: 'Male'},
                    { key: 'f', value: 'Female'}
                ],
                order: 3
            }),

            new QuestionTextBox({
                key: 'firstName',
                label: 'First Name',
                value: 'Oc',
                required: true,
                order: 1
            }),


            new QuestionTextBox({
                key: 'lastName',
                label: 'Last Name',
                value: 'Dev',
                required: true,
                order: 2
            }),
        ]

        return of(question.sort((a,b) => a.order - b.order));
    }
}