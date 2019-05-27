import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomedataProvider {
data: any;
getProduct: any;
  constructor(public http: Http) {
    this.data = null;
this.getProduct = null;
  }

sliderLoad() {
if (this.data) {
return Promise.resolve(this.data);
}    
return new Promise(resolve => {
this.http.get('http://alcoholapp.thetechnologyleader.com/AllInOne/sliderDataMobile')
.map(res => res.json())
.subscribe(data => {
this.data = data.slider;
resolve(this.data);
});
});
} 

 filterItems(searchTerm){
       return this.getProduct.filter((item) => {             
            return (item.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 );
        });    
    } 


getProductList() {   
if (this.data) {
return Promise.resolve(this.data);
}    
return new Promise(resolve => {
this.http.get('http://alcoholapp.thetechnologyleader.com/AddProduct/getProductList')
.map(res => res.json())
.subscribe(data => {
this.data = data.productList;   
this.getProduct = data.productList; 
resolve(this.data);
});
});
}

}
