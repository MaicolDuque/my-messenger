import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    let myUser: User = {
      nick: 'Maicol',
      age: 23,
      email: 'maicol@hotmail.com',
      friend: true,
      uid: 1,

    }

    let users: User[] = [
      myUser
    ]
  }

  ngOnInit() {
  }

}
