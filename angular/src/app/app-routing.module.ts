import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginPageComponent } from './Components/Authentication/login-page/login-page.component';
import { RegisterPageComponent } from './Components/Authentication/register-page/register-page.component';
import { HomeResolver } from './Core/Services/Resolvers/home-resolver';
import { AnonymousGuardService } from './Core/Services/Guards/anonymous-guard.service';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { AdminGuardService } from './Core/Services/Guards/admin-guard.service';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { AllOrdersResolver } from './Core/Services/Resolvers/all-orders-resolver';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { UserGuardService } from './Core/Services/Guards/user-guard.service';
import { UserOrdersResolver } from './Core/Services/Resolvers/user-orders-resolver';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { CartResolver } from './Core/Services/Resolvers/cart-resolver';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: [HomeResolver]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full',
    canActivate: [AnonymousGuardService]
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    pathMatch: 'full',
    canActivate: [AnonymousGuardService]
  },
  {
    path: 'products/edit',
    component: EditProductComponent,
    pathMatch: 'full',
    canActivate: [AdminGuardService]
  },
  {
    path: 'products/create',
    component: CreateProductComponent,
    pathMatch: 'full',
    canActivate: [AdminGuardService]
  },
  {
    path: 'products/details',
    component: ProductDetailsComponent,
    pathMatch: 'full',
    canActivate: [UserGuardService]
  },
  {
    path: 'orders/all',
    component: AllOrdersComponent,
    pathMatch: 'full',
    canActivate: [AdminGuardService],
    resolve: [AllOrdersResolver]
  },
  {
    path: 'orders',
    component: MyOrdersComponent,
    pathMatch: 'full',
    canActivate: [UserGuardService],
    resolve: [UserOrdersResolver]
  },
  {
    path: 'orders/details',
    component: OrderDetailsComponent,
    pathMatch: 'full',
    canActivate: [UserGuardService],
  },
  {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full',
    canActivate: [UserGuardService],
    resolve: [CartResolver]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
