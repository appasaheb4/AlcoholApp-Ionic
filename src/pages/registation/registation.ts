import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform} from 'ionic-angular';
import {  MenuController } from 'ionic-angular/index';
import { AlertController } from 'ionic-angular';
import {  Validators,ValidatorFn,AbstractControl,FormBuilder } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-registation',
  templateUrl: 'registation.html',         
})   
export class RegistationPage {
  public registationForm:any;
  public name:string;
  public mobileNo:number;
  public email:string;
    public adharno:string;
  public address:string;
  public area:string;
  public city:string;
  public pin:string;
  public state:string;
  public cuntry:string;
  public oldPass:string;
  public newPass:string;
  public tokenNo:string;
  btnSubmit: boolean = false;
  teapCheack: boolean;

  constructor(public platform: Platform,public _form:FormBuilder,public alertCtrl: AlertController,private menu: MenuController,public navCtrl: NavController, public navParams: NavParams,public http: Http,public loading: LoadingController,public toastCtrl: ToastController,public storage:Storage) {
    this.registationForm=this._form.group({
    'name': [null,  Validators.required],
    'mobileNo': [null, Validators.compose([Validators.maxLength(10), Validators.required])],
    'email' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50),Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
    'city': [null,  Validators.required],
    'area': [null,  Validators.required],
    'address' : [null],
    'tearC' : [null],
    'adharno': [null],
    'oldPass' : ['',  Validators.required],
    'newPass' : ['', [Validators.required,this.equalto('oldPass')]],
    });
  }

  ionViewDidEnter() {
  //this.getTokenNo();
  this.menu.enable(false, 'menu1');
  }

  back(){
  this.navCtrl.pop();
  }

  equalto(field_name): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
  let input = control.value;
  let isValid=control.root.value[field_name]==input
  if(!isValid){
  return { 'equalTo': {isValid} }
  }
  else{
  return null;
  }
  }     
  }

saveData(){
let loader = this.loading.create({
content: 'Wating.........',
});

loader.present().then(() => {
let headers = new Headers();
headers.append('Content-Type', 'application/json');
let data = {
name: this.name,
mobileNo: this.mobileNo,
email:this.email,   
adharno:this.adharno,
address:this.address,
area:this.area,
city:this.city,
pin:this.pin,
state:this.state,        
country:this.cuntry, 
pass:this.newPass,  
tokenNo:'1234',   
}           
this.http.post('http://alcoholapp.thetechnologyleader.com/Login/registationMobile',JSON.stringify(data))
.map(res => res.json())          
.subscribe(res => {

//var array = res.split('=');                       
if(res=="yes")        
{
loader.dismiss();
let toast = this.toastCtrl.create({
message: 'Login complited.',
duration: 2000
});
toast.present();
this.storage.set('mobileNo',this.mobileNo);
this.storage.set('email',this.email);
this.navCtrl.pop();
}
else{
loader.dismiss();
let toast = this.toastCtrl.create({
message: 'Registation done.',        
duration: 2000
});
toast.present();
this.navCtrl.pop();
}
}, (err) => {
loader.dismiss();
let toast = this.toastCtrl.create({
message: 'Registation done.',
duration: 2000
});
toast.present();
this.navCtrl.pop();
});
});
}










  termAlert() {
     if(this.teapCheack==true){
     let alert = this.alertCtrl.create({
  title: 'Terms & Conditions',
  subTitle: 'We welcome users to register on our digital platforms. We offer the below mentioned registration services which may be subject to change in the future. All changes will be appended in the terms and conditions page and communicated to existing users by email.',
  buttons: ['OK']
  });
  alert.present();
  this. btnSubmit=true;
    }
    else{
    this.btnSubmit=false;
    }
    }

}
