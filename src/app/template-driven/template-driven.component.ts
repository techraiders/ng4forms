import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'techraiders';

    /*this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: 'hello_navneet@hotmail.com',
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });*/ // NOT A RECOMMENDED METHOD
    // used to override whole form

    /**
     * Used to override specific element value of form
     */
    this.signupForm.form.patchValue({
      userData:{
        username: 'navneet'
      }
    });
  }

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    console.log(this.signupForm);
  }

}
