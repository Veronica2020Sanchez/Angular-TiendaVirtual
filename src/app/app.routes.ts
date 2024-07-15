import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboadComponent } from './customer/buyer/buyer-dashboad/buyer-dashboad.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';
import { BuyerAuthGaurdService, SellerAuthGaurdService, SellerBuyerAuthGuardLogin } from './shared/services/auth-guard.service';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: '', canActivate: [SellerBuyerAuthGuardLogin], children: [
      { path: "sign-in", component: SigninSignupComponent },
      { path: "sign-up", component: SigninSignupComponent },
    ]
  },
  {
    path: '', canActivate: [SellerAuthGaurdService], children: [
      { path: "seller-dashboard", component: SellerDashboardComponent },
      { path: "seller/product", component: ProductComponent }
    ]
  },
  {
    path: '', canActivate: [BuyerAuthGaurdService], children: [
      { path: "buyer-dashboard", component: BuyerDashboadComponent },
      { path: "checkout", component: CheckoutComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];
