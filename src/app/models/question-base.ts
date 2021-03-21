export class QuestionBase<T>{
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: {  key: string, value: string}[]; 

    constructor(
        fields: {
            value?: T;
            key?: string;
            label?: string;
            required?: boolean;
            order?: number;
            controlType?: string;
            type?: string;
            options?: {  key: string, value: string}[]; 
        }
    ){
        this.value = fields.value;
        this.key = fields.key || '';
        this.label = fields.label || '';
        this.required = !!fields.required;
        this.order = fields.order === undefined ? 1 : fields.order;
        this.controlType = fields.controlType || '';
        this.type = fields.type || '';
        this.options = fields.options || [];
    }
}