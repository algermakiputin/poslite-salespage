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

    if ( this.signupForm.valid ) {
     
      this.signupForm.reset();
      this.success = true; 
      this.signupService.enroll(userData)
      .subscribe(
        data => {
          console.log(data);
        },
        error => { 
          console.log(error)
        }

      );
    } 
 
  }

}
