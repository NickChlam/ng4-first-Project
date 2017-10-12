import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName = "";
  completed = false;

  constructor() { }

  ngOnInit() {
  }

  usernameEntered() {
    this.completed = true;
  }
  clearText() {
    this.userName = "";
    this.completed = false;
  }
}
