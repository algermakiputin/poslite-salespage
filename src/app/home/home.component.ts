import { Component, OnInit } from '@angular/core'; 
import { Enquiries } from '../enquiries';
import { EnquiriesService } from '../enquiries.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";
import * as prices from '../../prices.json';
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
  price;
  reviews = [
    {
      title: "Magandang Gamitin sa Negosyo",
      ratings: 5,
      reviews: "Magandang gamitin sa negosyo, madali intindihin (simple), Sila na ang nag install through AnyDesk, sulit at efective rekomendado ko ito",
      image: "assets/images/reviews/ian.jpg",
      name: "Ian Atienza",
      address: "Lipa City, Batangas",
    },
    { 
      title: "Convenient and pretty well done",
      ratings: 5,
      reviews: "I requested for additional feature like a purchase order system, had to pay for additional functions but worth it to keep track of my orders.",
      image: "assets/images/reviews/james.jpg",
      name: "James Buenviaje",
      address: "Naga City, Philippines"
    },
    { 
      title: "Has a Great aftersales support",
      ratings: 5,
      reviews: "Very accomodating with a great aftersales service. the software is very easy to use and it helps me a lot to monitor my inventory and sales.",
      image: "assets/images/reviews/edmund.jpg",
      name: "Edmund Lai",
      address: "Taguig City, Metro Manila"
    },
    { 
      title: "User-friendly for our store",
      ratings: 5,
      reviews: "Legit and user friendly for our grocery store. When I logged in to the system, I can easily find all the features I need, no need long hours for training my cashiers.",
      image: "assets/images/reviews/charles.jpg",
      name: "Charles Dave Varela",
      address: "Navotas City, Metro Manila"
    },
    { 
      title: "Great After Sales Support and Use-friendly",
      ratings: 5,
      reviews: "They are very fast to act on my concern and the software is pretty straightforward, user friendly. and easy to use even the ordinary staff can follow through.",
      image: "assets/images/reviews/arnel.jpg",
      name: "Arnel Supan",
      address: "San Fernando City, Pampanga"
    },
    { 
      title: "Magandang Gamitin for Motorcycle Parts Shop",
      ratings: 5,
      reviews: "Maganda gamitin ang Poslite sa motorcycle parts madaling intindihin walang hassle , pag may question ako, mabilis ang kanilang support. More Thanks",
      image: "assets/images/reviews/kareen.jpg",
      name: "Kareen Flores",
      address: "Metro Manila"
    }
  ]

  sending = false;
  formSubmitted = false;
  businessSize = [7800, 14999, 23999];
  inventorySize = [5999, 11999, 17800];
  platform = [5200, 10000];
  
  enquiriesModel = new Enquiries("", "", "", "");
  contactUsForm; 

  constructor( 
    private _enquiryService: EnquiriesService, 
    private cookieService: CookieService, 
    private router: Router,
    private meta: Meta,
    private title: Title
    
    ) {
      
    this.title.setTitle("POSLite - Inventory Management Software");
    this.meta.addTags([
      { 
        name: 'description', 
        content: 'Point of Sales and Inventory Management Software for every retailer and wholesaler. Ideal for Grocery stores, hardware, pharmacy and more.'
      } 
    ]);
    
    this.contactUsForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      contact: new FormControl(),
      message: new FormControl() 
    }); 
  }

  ngOnInit() { 
    this.price = prices;
    console.log(this.price.pricing)
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

  buyNow( key ) { 
    let options = [
      {
        'version' : 'Bronze',
        'price' : prices.pricing.bronze,
        'url' : 'https://shop.poslitesoftware.com/product/poslite-inventory-management-software-bronze/'
      },
      {
        'version' : 'Silver',
        'price' : prices.pricing.silver,
        'url': 'https://shop.poslitesoftware.com/product/poslite-inventory-management-software-silver/'
      },
      {
        'version' : 'Gold',
        'price' : prices.pricing.gold,
        'url': 'https://shop.poslitesoftware.com/product/poslite-inventory-management-software-gold-version/'
      }
    ];

    this.cookieService.set('cart',JSON.stringify(options[key]));
    window.open(options[key].url);
    // window.location.href = options[key].url;
    
  }

  onSubmit(form) { 

    this.formSubmitted = true; 
    this.loading = true;

    if ( form.form.valid ) {
    
      this._enquiryService.enroll(this.enquiriesModel)
      .subscribe(
        data => {
          
          this.enquirySent = true;
          this.loading = true;
        },
        error => {
          this.loading = true;
        }

      );
    }else {
      this.loading = false;
    }
 
    
  }
}
