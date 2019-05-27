import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomedataProvider } from '../../providers/homedata/homedata';

import { SpecficproductPage } from '../specficproduct/specficproduct';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
providers:[HomedataProvider] 
})
export class HomePage {
sliderImageName:any;  
getProduct: any;
searchTerm: String = '';
toggled: boolean;
  constructor(public navCtrl: NavController,public  personservice:HomedataProvider) {
this.sliderDataLoad();
this.getProductData();
  }

sliderDataLoad(){      
this.personservice.sliderLoad()    
.then(data =>{  
this.sliderImageName=data;
});
}

getProductData(){   
this.personservice.getProductList()    
.then(data =>{  
this.getProduct=data;
});
}

toggleSearch() {

this.toggled = this.toggled ? false : true;
}

setFilteredItems() {
 this.getProduct= this.personservice.filterItems(this.searchTerm);
    }

//open next page
secficProOpen(value){
this.navCtrl.push(SpecficproductPage,{
"param1":value
});
}


}
