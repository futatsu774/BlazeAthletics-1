import { ProductsService } from './service/products.service';
import { OrderOngoingComponent } from './admin/order-ongoing/order-ongoing.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarUserComponent } from './user/navbar-user/navbar-user.component';
import { HomeUserComponent } from './user/home-user/home-user.component';
import { AboutUsUserComponent } from './user/about-us-user/about-us-user.component';
import { ProductsUserComponent } from './user/products-user/products-user.component';
import { FaqsUserComponent } from './user/faqs-user/faqs-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { SignupUserComponent } from './user/signup-user/signup-user.component';
import { CheckoutUserComponent } from './user/checkout-user/checkout-user.component';
import { MyAccountUserComponent } from './user/my-account-user/my-account-user.component';
import { SelectedItemUserComponent } from './user/selected-item-user/selected-item-user.component';
import { ShoppingCartUserComponent } from './user/shopping-cart-user/shopping-cart-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { InventoryAdminComponent } from './admin/inventory-admin/inventory-admin.component';
import { ProductEditAdminComponent } from './admin/product-edit-admin/product-edit-admin.component';
import { ProductNewAdminComponent } from './admin/product-new-admin/product-new-admin.component';
import { AccountsRegisteredAdminComponent } from './admin/accounts-registered-admin/accounts-registered-admin.component';
import { AccountsNewAdminComponent } from './admin/accounts-new-admin/accounts-new-admin.component';
import { AccountEditAdminComponent } from './admin/account-edit-admin/account-edit-admin.component';
import { OrderTopayComponent } from './admin/order-topay/order-topay.component';
import { OrderPendingComponent } from './admin/order-pending/order-pending.component';
import { OrderDeliveryComponent } from './admin/order-delivery/order-delivery.component';
import { OrderCancelComponent } from './admin/order-cancel/order-cancel.component';
import { OrderHistoryComponent } from './admin/order-history/order-history.component';
import { OrderSidenavComponent } from './admin/order-sidenav/order-sidenav.component';
import { ProductsComponent } from './template/products/products.component';
import { ItemCartComponent } from './template/item-cart/item-cart.component';
import { ItemCheckoutComponent } from './template/item-checkout/item-checkout.component';
import { ProductInventoryComponent } from './template/product-inventory/product-inventory.component';
import { MyaccountTopayComponent } from './template/myaccount-topay/myaccount-topay.component';
import { MyaccountToreceiveComponent } from './template/myaccount-toreceive/myaccount-toreceive.component';
import { SignupComponent } from './template/signup/signup.component';
import { OrderPendingDetailsComponent } from './template/order-pending-details/order-pending-details.component';
import { OrderHistoryDetailsComponent } from './template/order-history-details/order-history-details.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { CheckoutDiffAddressComponent } from './template/checkout-diff-address/checkout-diff-address.component';
import { ProductComponent } from './template/product/product.component';
import { ProductDynamicInputsComponent } from './template/product-dynamic-inputs/product-dynamic-inputs.component';
import { AuthenticationInterceptorService } from './service/authentication.interceptor.service';
import { UserAuthenticationGuard } from './route-guard/user.authentication.guard';
import { SignInGuard } from './route-guard/sign-in.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarUserComponent,
    HomeUserComponent,
    AboutUsUserComponent,
    ProductsUserComponent,
    FaqsUserComponent,
    ShoppingCartUserComponent,
    LoginUserComponent,
    SignupUserComponent,
    CheckoutUserComponent,
    MyAccountUserComponent,
    SelectedItemUserComponent,
    LoginAdminComponent,
    DashboardAdminComponent,
    InventoryAdminComponent,
    ProductEditAdminComponent,
    ProductNewAdminComponent,
    AccountsRegisteredAdminComponent,
    AccountsNewAdminComponent,
    AccountEditAdminComponent,
    OrderTopayComponent,
    OrderPendingComponent,
    OrderDeliveryComponent,
    OrderCancelComponent,
    OrderHistoryComponent,
    OrderSidenavComponent,
    OrderOngoingComponent,
    ProductComponent,
    ProductsComponent,
    ItemCartComponent,
    ItemCheckoutComponent,
    ProductInventoryComponent,
    MyaccountTopayComponent,
    MyaccountToreceiveComponent,
    SignupComponent,
    OrderPendingDetailsComponent,
    OrderHistoryDetailsComponent,
    NavbarAdminComponent,
    CheckoutDiffAddressComponent,
    ProductDynamicInputsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule ,
    BsDropdownModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeUserComponent},
      {path: 'faqs', component: FaqsUserComponent},
      {path: 'about-us', component: AboutUsUserComponent},
      {path: 'products-user', component: ProductsUserComponent},
      {path: 'shopping-cart', component: ShoppingCartUserComponent},
      {path: 'login-user', component: LoginUserComponent, canActivate:[SignInGuard]},
      {path: 'signup-user', component: SignupUserComponent, canActivate:[SignInGuard]},
      {path: 'check-out', component:CheckoutUserComponent},
      {path: 'my-account', component: MyAccountUserComponent, canActivate:[UserAuthenticationGuard]},
      {path: 'selected-item', component:SelectedItemUserComponent},
      {path: 'login-admin', component: LoginAdminComponent},
      {path: 'dashboard-admin', component: DashboardAdminComponent},
      {path: 'inventory', component:InventoryAdminComponent},
      {path: 'product-edit', component: ProductEditAdminComponent},
      {path: 'product-new', component: ProductNewAdminComponent},
      {path: 'accounts-registered', component: AccountsRegisteredAdminComponent},
      {path: 'account-new', component: AccountsNewAdminComponent},
      {path: 'account-edit', component: AccountEditAdminComponent},
      {path: 'orders-topay', component: OrderTopayComponent},
      {path: 'orders-pending', component: OrderPendingComponent},
      {path: 'orders-delivery', component: OrderDeliveryComponent},
      {path: 'orders-ongoing', component: OrderOngoingComponent},
      {path:'orders-cancel', component:OrderCancelComponent},
      {path:'orders-history', component: OrderHistoryComponent},
    ]),
      
  ],
  providers: [
    ProductsService,
    BsDropdownConfig,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
