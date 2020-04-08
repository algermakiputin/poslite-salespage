import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signupForm;
  formSubmitted = false;
  success = false;
  email_exist = false;
  loading = false;
  
  constructor( private FormBuilder: FormBuilder, private signupService: SignupService ) {

    this.signupForm = this.FormBuilder.group({
      'fname': new FormControl('', [Validators.required]),
      'lname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'contact': new FormControl('', [Validators.required]),
      'agree': new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {


  }

  onSubmit(userData) {   
    this.formSubmitted = true;
    this.loading = true;
    
    if ( this.signupForm.valid ) { 
   
      this.signupService.enroll(userData)
      .subscribe(
        data => {
          if (data == 0) {
            this.email_exist = true; 

          }else {
            this.signupForm.reset();
            this.success = true; 
            console.log(data);
          }
          this.loading = false;
        },
        error => { 
          this.loading = false;
        }
        
      );
      

      
    } else {
      this.loading = false;
    }

    
 
  }

}
