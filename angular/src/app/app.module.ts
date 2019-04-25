import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './Components/App/app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from './Core/Services/Interceptors/app-http.interceptor';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginPageComponent } from './Components/Authentication/login-page/login-page.component';
import { RegisterPageComponent } from './Components/Authentication/register-page/register-page.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginPageComponent,
    RegisterPageComponent,
    EditProductComponent,
    CreateProductComponent,
    AllOrdersComponent,
    MyOrdersComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
