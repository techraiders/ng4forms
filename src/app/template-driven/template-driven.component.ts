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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;

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
    // Extracts data from the form and sets value on the class's user property, to further display into the view
    this.submitted = true;
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
