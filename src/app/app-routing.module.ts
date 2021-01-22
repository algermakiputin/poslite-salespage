import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'about', component: AboutComponent},
  { path: 'blog/:slug', component: BlogComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'terms-conditions', component: TermsConditionsComponent},
  { path: 'checkout', component: PaymentComponent},
  { path: 'thankyou', component: ThankyouComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
