import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicFormComponentComponent } from './dynamic-form-component/dynamic-form-component.component';
import { DynamicFormQuestionComponentComponent } from './dynamic-form-question-component/dynamic-form-question-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponentComponent,
    DynamicFormQuestionComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
