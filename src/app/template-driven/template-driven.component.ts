import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})

export class TemplateDrivenComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  user = {
    firstname: '',
    lastname: '',
    email: '',
    contact: ''
  }

  users = [];

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    this.submitted = true;
    this.displayData();
    // localStorage.users = this.users;
    this.onReset();
  }



  displayData() {
    // Extracts data from the form and sets value on the class's user property, to further display into the view
    console.log(this.signupForm);
    this.user.firstname = this.signupForm.value.userData.firstname;
    this.user.lastname = this.signupForm.value.userData.lastname;
    this.user.email = this.signupForm.value.email;
    this.user.contact = this.signupForm.value.contact;
    this.users.push(this.signupForm.value);
    console.log(this.users[0]);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.users = JSON.stringify(this.users);
  }

  onReset() {
    this.signupForm.reset();
  }
}
