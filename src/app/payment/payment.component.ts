import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import { Title } from "@angular/platform-browser";
 
loadScript("https://www.paypal.com/sdk/js?client-id=ASMD2Csmo8TLvfZbFTu2Cvik3hVz2KEz5Q8K5rjsPVgPy5COGNWpQWAytyOAlJCD4svAc2amW5lDeaBF&currency=PHP");
declare var paypal;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  product = {
    price: 25999,
    description: "POSLite Gold", 
  }

  formSubmitted = false;
  customerForm;
  cart;

  constructor( 
    private FormBuilder: FormBuilder, 
    private paymentService: PaymentService, 
    private router: Router, 
    private cookieService: CookieService,
    private title: Title

    ) {  

    this.title.setTitle("Checkout");
    const cookieExist = this.cookieService.check('cart'); 
    this.cart = JSON.parse(this.cookieService.get("cart"));

    if ( !cookieExist )
      this.router.navigate(["/"]);

    this.customerForm = this.FormBuilder.group({
      'fname': new FormControl('', [Validators.required]),
      'lname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'message': new FormControl('', []),
      'description' : this.cart.version,
      'total' : this.cart.price
    });
  }

  ngOnInit() { 
     
    paypal.Buttons({  
      onInit: (data, actions) => {

        actions.disable();

        this.customerForm.statusChanges
                .subscribe(
                  result => {
                    if (result == "VALID")
                      return actions.enable();

                    return actions.disable();
                  }
              ); 
      },
      createOrder: (data, actions) => {
 
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: "PHP",
              value: this.cart.price 
              },
        
            }] 

        });
      },

      onApprove: (data, actions) => {

        this.paymentService.enroll(this.customerForm.value)
          .subscribe(
            data => {

              console.log(data);
              this.cookieService.set("order_number", data.order_number);
              this.router.navigate(['/thankyou']);
            },
            error => { 
              console.log(error);
            }
            
          );

        return actions.order.capture().then(function(details) {
          
        });
      },
      onClick : (data, actions) => {  
        this.formSubmitted = true;
         
      }
      
    })
    .render("#paypal");
 
  }
 

}


function loadScript(url: string) {
  const body = <HTMLDivElement> document.body;
  const script = document.createElement('script');
  script.innerHTML = '';
  script.src = url;
  script.async = false;
  script.defer = true;
  body.appendChild(script);
}