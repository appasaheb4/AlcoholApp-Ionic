import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage'; 


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegistationPage } from '../pages/registation/registation';
import { CategoryPage } from '../pages/category/category';
import { AccountPage } from '../pages/account/account';
import { CartPage } from '../pages/cart/cart';
import { ChatroomPage } from '../pages/chatroom/chatroom';
import { ChatuserlistPage } from '../pages/chatuserlist/chatuserlist';
import { SpecficproductPage } from '../pages/specficproduct/specficproduct';
import { SupportPage } from '../pages/support/support';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomedataProvider } from '../providers/homedata/homedata';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,    
    RegistationPage,   
    CategoryPage,
AccountPage,
CartPage,
ChatroomPage,
ChatuserlistPage,
SpecficproductPage,
SupportPage,
  ],
  imports: [                      
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom',tabsHideOnSubPages: true}),       
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegistationPage,
    CategoryPage,
AccountPage,
CartPage,
ChatroomPage,
ChatuserlistPage,
SpecficproductPage,
SupportPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomedataProvider
  ]
})
export class AppModule {}
