import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users;
  constructor() {
   }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users'));
  }
}
