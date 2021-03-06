import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CustomeHeaderPage} from "../pages/custome-header/custome-header";
import {FooterPage} from "../pages/footer/footer";
import {ProductListPage} from "../pages/product-list/product-list";
import {BrandsPage} from "../pages/brands/brands";
import {CustomCardPage} from "../pages/custom-card/custom-card";
import {AccessoriesPage} from "../pages/accessories/accessories";
import {ProductDescriptionPage} from "../pages/product-description/product-description";
import {CartPage} from "../pages/cart/cart";
import {LoginPage} from "../pages/login/login";
import {AddressPage} from "../pages/address/address";
import {DeliveryPage} from "../pages/delivery/delivery";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CustomeHeaderPage,
    FooterPage,
    ProductListPage,
    BrandsPage,
    CustomCardPage,
    AccessoriesPage,
    ProductDescriptionPage,
    CartPage,
    LoginPage,
    AddressPage,
    DeliveryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CustomeHeaderPage,
    FooterPage,
    ProductListPage,
    BrandsPage,
    CustomCardPage,
    AccessoriesPage,
    ProductDescriptionPage,
    CartPage,
    LoginPage,
    AddressPage,
    DeliveryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
