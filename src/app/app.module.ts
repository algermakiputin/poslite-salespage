import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { FacebookModule } from 'ngx-facebook';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { SinglePageBlogComponentComponent } from './single-page-blog-component/single-page-blog-component.component';
import { SignupComponent } from './signup/signup.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CookieService } from "ngx-cookie-service";
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal'; 

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    HomeComponent,
    BlogComponentComponent,
    SinglePageBlogComponentComponent,
    SignupComponent,
    TermsConditionsComponent,
    PaymentComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FacebookModule.forRoot(),
    CommonModule,
    TransferHttpCacheModule,
    NgtUniversalModule
  ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
