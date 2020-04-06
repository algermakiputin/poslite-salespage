import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signupForm;
  formSubmitted = false;
  
  constructor( private FormBuilder: FormBuilder ) {

    this.signupForm = this.FormBuilder.group({
      'fname': new FormControl('alger', [Validators.required]),
      'lname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'number': new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {


  }

  onSubmit(userData) {
    
    this.formSubmitted = true;

    if ( this.signupForm.valid ) {
 
      this.signupForm.reset();
    } 
 
  }

}
