import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../home/home';
import { CategoryPage } from '../category/category';
import { CartPage } from '../cart/cart';
import { AccountPage } from '../account/account';
import { SupportPage } from '../support/support';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 
  tab1Root = HomePage;
   tab2Root = CategoryPage;
    tab3Root = CartPage;
   tab4Root = AccountPage;
    tab5Root = SupportPage;  
    constructor(private statusBar: StatusBar) {
        
        this.statusBar.show();
        this.statusBar.styleDefault();
  }
}
