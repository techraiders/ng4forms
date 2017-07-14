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

  constructor() { }

  ngOnInit() {
  }

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    console.log(this.signupForm);
  }

}
