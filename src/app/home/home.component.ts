import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  calculator = {
    calculated: false,
    businessSize: 0,
    platform: 'offline',
    inventorySize: 0,
    support: 'free'
  }

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    this.calculator.calculated = true;
  }
}
