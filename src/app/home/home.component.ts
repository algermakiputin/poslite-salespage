import { Component, OnInit } from '@angular/core'; 
import { Enquiries } from '../enquiries';
import { EnquiriesService } from '../enquiries.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare const navbar_spyscroll: any;
declare const start_counter: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {

  loading = false;
  enquirySent = false;

  calculator = {
    calculated: false,
    businessSize: 0,
    platform: 0,
    inventorySize: 0,
    support: 'free',
    total: 0
  }; 

  sending = false;
  formSubmitted = false;
  businessSize = [7800, 14999, 23999];
  inventorySize = [5999, 11999, 17800];
  platform = [5200, 10000];
  
  enquiriesModel = new Enquiries("", "", "", "");
  contactUsForm;

  constructor( private _enquiryService: EnquiriesService ) {

    this.contactUsForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      contact: new FormControl(),
      message: new FormControl() 
    });

  }

  ngOnInit() { 
     
    navbar_spyscroll();
    start_counter();
   
  }


  calculate() {  
    
    this.loading = true;

    setTimeout(() => {
      this.calculator.calculated = true;
      this.calculator.total = this.businessSize[this.calculator.businessSize] + 
                              this.inventorySize[this.calculator.inventorySize] + 
                              this.platform[this.calculator.platform];
      this.loading = false;
    }, 1500);
     
  
  }

  onSubmit(form) { 

    this.formSubmitted = true;
    this.sending = true; 
    
    this._enquiryService.enroll(this.enquiriesModel)
      .subscribe(
        data => {
          this.sending = false; 
          this.enquirySent = true;
        },
        error => {
          this.sending = false;
          console.log(error)
        }

      ); 
    
  }
}
