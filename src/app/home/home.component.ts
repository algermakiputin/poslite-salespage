import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  calculator = {
    calculated: false,
    businessSize: 0,
    platform: 0,
    inventorySize: 0,
    support: 'free',
    total: 0
  }

  businessSize = [7800, 14999, 23999];
  inventorySize = [5999, 11999, 17800];
  platform = [3500, 6000];

  constructor() { }

  ngOnInit() {
  }

  calculate(button) { 
    // Business Size: 
    // 0 = 5000
    // 1 = 10,999
    // 2 = 15,999

    // Inventory Size
    // 0 = 3999
    // 1 = 8999
    // 2 = 12800

    // Platform
    // 0 = 2000
    // 1 = 6000

    // After Sales Support
    // Free = 0      
    
    this.loading = true;

    setTimeout(() => {
      this.calculator.calculated = true;
      this.calculator.total = this.businessSize[this.calculator.businessSize] + 
                              this.inventorySize[this.calculator.inventorySize] + 
                              this.platform[this.calculator.platform];
      this.loading = false;
    }, 1500);
    
    
  
  }
}
