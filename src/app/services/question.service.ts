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

            new QuestionTextBox({
                key:  'email',
                label: 'Email',
                type: 'email',
                order: 4
            }),

            new QuestionTextBox({
                key: 'birthdate',
                label: 'Birth Date',
                type: 'date',
                order: 5
            }),
            new QuestionTextBox({
                key: 'phonenumber',
                label: 'Phone Number',
                type: 'number',
                order: 6
            })  
            ,
            new QuestionTextBox({
                key: 'address',
                label: 'Home Address',
                order: 7
            })  
            ,
            new QuestionTextBox({
                key: 'email',
                label: 'Email Addres',
                order: 8
            })  
            ,
            new QuestionTextBox({
                key: 'motherName',
                label: 'Mother\'s Name',
    
                order: 9
            })  
            ,
            new QuestionTextBox({
                key: 'fatherName',
                label: 'Father\'s Name',
    
                order: 10
            })  

            
        ]

        return of(question.sort((a,b) => a.order - b.order));
    }

    getEducInfoFields(){
        const questions: QuestionBase<string>[] = [
            new QuestionTextBox({
                key: 'grade',
                label: 'Grade',
                type: 'number',
                order: 3
            }),

            new QuestionTextBox({
                key: 'elementarySchool',
                label: 'Elementary School',
                required:  true,
                order: 1,
            }),
    
            new QuestionTextBox({
                key: 'schoolAddress',
                label: 'School Address',
                required:  true,
                order: 2
            })
   
            ,
            new QuestionDropdown({
                key: 'course',
                label: 'Course Option 1',
                order:11,
                options: [
                    {
                        key: 'cs', value: 'Computer Science'
                    },
                    {
                        key: 'coe', value: 'Computer Engineering'
                    },
                    {
                        key: 'it', value: 'Information Technology'
                    },
                    {
                        key: 'bsa', value: 'Accountancy'
                    }
                ],
            })  
            ,
            new QuestionDropdown({
                key: 'course2',
                label: 'Course Option 2',
                order: 12,
                options: [
                    {
                        key: 'cs', value: 'Computer Science'
                    },
                    {
                        key: 'coe', value: 'Computer Engineering'
                    },
                    {
                        key: 'it', value: 'Information Technology'
                    },
                    {
                        key: 'bsa', value: 'Accountancy'
                    }
                ],
            })  
            ,
            new QuestionDropdown({
                key: 'course3',
                label: 'Course Option 3',
                order: 13,
                options: [
                    {
                        key: 'cs', value: 'Computer Science'
                    },
                    {
                        key: 'coe', value: 'Computer Engineering'
                    },
                    {
                        key: 'it', value: 'Information Technology'
                    },
                    {
                        key: 'bsa', value: 'Accountancy'
                    }
                ],
               
            })
           ]
    
           return of(questions.sort((a,b) => a.order - b.order));
    }
}