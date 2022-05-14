import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User("","")

  onSubmit() {
    console.log(this.userModel)
  }
}
