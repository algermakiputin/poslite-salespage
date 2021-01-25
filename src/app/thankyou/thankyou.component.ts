import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  order_number;

  constructor(private cookieService: CookieService, private router: Router) { 

    if ( !cookieService.check("order_number") )
      return router.navigate(['/']);

    this.order_number = cookieService.get("order_number");

    cookieService.deleteAll();
  }

  ngOnInit() {


  }

}
