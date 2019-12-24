import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCounter = 0;

  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter += 1;

  }
}
