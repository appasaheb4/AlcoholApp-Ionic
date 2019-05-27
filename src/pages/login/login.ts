import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  MenuController } from 'ionic-angular/index';
import { AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { StatusBar } from '@ionic-native/status-bar';

import { RegistationPage } from '../registation/registation';
import { TabsPage } from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm:any;
  public mobileNo:string;
  public password:string;
  public tokenNo:string;
  constructor(private statusBar: StatusBar,public _form:FormBuilder,public alertCtrl: AlertController,private menu: MenuController,public navCtrl: NavController, public navParams: NavParams,public http: Http,public loading: LoadingController,public toastCtrl: ToastController,public storage:Storage) {
    this.loginForm=this._form.group({
    'mobileNo': [null,  Validators.required],
    'password': [null, Validators.required],
    });
    this.statusBar.hide();
      
  }
  goRegiationPage(){
  this.navCtrl.push(RegistationPage);
  }

ionViewDidEnter() {
//this.getTokenNo();
this.menu.enable(false, 'menu1');
}


login(){
let loader = this.loading.create({
content: 'Wating.........',
});

loader.present().then(() => {


let headers = new Headers();
headers.append('Content-Type', 'application/json');
let data = {
mobileNo: this.mobileNo,
password: this.password,   
tokenNo:'1234',
}   
this.http.post('http://alcoholapp.thetechnologyleader.com/Login/loginMobile',JSON.stringify(data))
.map(res => res.json())
.subscribe(res => {
var array = res.split('=');
console.log(res);
if(array[0]=="yes")
{
loader.dismiss();
this.storage.set('mobileNo',this.mobileNo);
this.storage.set('password',this.password);
this.storage.set('userId', array[1]);
this.navCtrl.setRoot(TabsPage);
}
else{
loader.dismiss();
let toast = this.toastCtrl.create({
message: 'Correct username and password.',
duration: 2000
});
toast.present();
}
}, (err) => {
loader.dismiss();
let toast = this.toastCtrl.create({
message: 'Correct username and password.',
duration: 2000
});
toast.present();
});
});

}




  emailSent() {
  let alert = this.alertCtrl.create({
  title: 'Forgot Password',
  inputs: [
  {
  name: 'email',
  placeholder: 'Email'
  },
  ],
  buttons: [
  {
  text: 'Cancel',
  },
  {
  text: 'Sent',
  handler: data => {
  }
  }
  ]
  });
  alert.present();
  }




}
