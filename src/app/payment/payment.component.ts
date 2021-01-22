import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { Router } from "@angular/router"

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

  constructor( private FormBuilder: FormBuilder, private paymentService: PaymentService, private router: Router ) { 

    this.customerForm = this.FormBuilder.group({
      'fname': new FormControl('', [Validators.required]),
      'lname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'message': new FormControl('', []),
      'description' : "POSLite",
      'total' : 25999
    });
  }

  ngOnInit() {
 
    paypal.Buttons({  
      onInit: (data, actions) => {

        // if ( !this.customerForm.valid) {
        //   actions.disable();

        // }else {
        //   actions.enable();

        // }

      },
      createOrder: function(data, actions) {

        console.log(data)
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: "USD",
              value: "110.00" 
              },
        
            }],
            redirect_urls: {
            return_url: 'http://www.pawelbiernacki.net/PawelBiernackiSklep/Success',
            cancel_url: 'http://www.pawelbiernacki.net/PawelBiernackiSklep/Cancel'
            }

        });
      },

      onApprove: (data, actions) => {

        this.paymentService.enroll(this.customerForm.value)
          .subscribe(
            data => {
              
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

        console.log(this.customerForm.value);

        this.formSubmitted = true;
        if ( !this.customerForm.valid ) {
        
        }
         
      }
      
    })
    .render("#paypal");
  }

}
