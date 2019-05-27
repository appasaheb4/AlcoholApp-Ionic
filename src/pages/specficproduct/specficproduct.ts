import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-specficproduct',
  templateUrl: 'specficproduct.html',
})
export class SpecficproductPage {
public getProductData : any;
public id : string; 

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public http: Http,public loading: LoadingController,public toastCtrl: ToastController,public storage:Storage) {

this.id = navParams.get('param1'); 
this.getData();
  }    



 getData(){     
let loader = this.loading.create({
content: 'Wating.........',
});                            
loader.present().then(() => {
let headers = new Headers();
headers.append('Content-Type', 'application/json');
let data = {
id: this.id,                   
}           
this.http.post('http://alcoholapp.thetechnologyleader.com/AddProduct/getProIdWise',JSON.stringify(data))
.map(res => res.json())   
.subscribe(res => {        
this.getProductData=res.productListSecfic;
loader.dismiss();
}, (err) => {     
loader.dismiss();
let toast = this.toastCtrl.create({
message: 'Data not found.',       
duration: 2000
});
toast.present();
});
});
}

}
