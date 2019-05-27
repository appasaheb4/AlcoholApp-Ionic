webpackJsonp([8],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__support_support__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(statusBar) {
        this.statusBar = statusBar;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__support_support__["a" /* SupportPage */];
        this.statusBar.show();
        this.statusBar.styleDefault();
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Categories" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Cart" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Account" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Support" tabIcon="headset"></ion-tab>\n</ion-tabs>\n    '/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\account\account.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\cart\cart.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__registation_registation__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var LoginPage = (function () {
    function LoginPage(statusBar, _form, alertCtrl, menu, navCtrl, navParams, http, loading, toastCtrl, storage) {
        this.statusBar = statusBar;
        this._form = _form;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loginForm = this._form.group({
            'mobileNo': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.statusBar.hide();
    }
    LoginPage.prototype.goRegiationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__registation_registation__["a" /* RegistationPage */]);
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        //this.getTokenNo();
        this.menu.enable(false, 'menu1');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var data = {
                mobileNo: _this.mobileNo,
                password: _this.password,
                tokenNo: '1234',
            };
            _this.http.post('http://alcoholapp.thetechnologyleader.com/Login/loginMobile', JSON.stringify(data))
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                var array = res.split('=');
                console.log(res);
                if (array[0] == "yes") {
                    loader.dismiss();
                    _this.storage.set('mobileNo', _this.mobileNo);
                    _this.storage.set('password', _this.password);
                    _this.storage.set('userId', array[1]);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Correct username and password.',
                        duration: 2000
                    });
                    toast.present();
                }
            }, function (err) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Correct username and password.',
                    duration: 2000
                });
                toast.present();
            });
        });
    };
    LoginPage.prototype.emailSent = function () {
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="text-center">Sign In</ion-title>\n  </ion-navbar>    \n\n</ion-header>\n\n\n<ion-content>\n  <div class="form-group" padding>\n      <form [formGroup]="loginForm">\n           <br/><br/><br/><br/><br/><br/>\n          <ion-list inset>\n              <ion-item>\n                    <ion-input type="number" placeholder="Mobile Number" formControlName="mobileNo" [(ngModel)]="mobileNo" autofocus></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-input type="password" placeholder="Password" formControlName="password" [(ngModel)]="password"></ion-input>\n              </ion-item>\n               <ion-item no-lines>\n              <button ion-button type="" full round (click)="login();"  [disabled]="!loginForm.valid">Sign In</button>\n               </ion-item>\n               <ion-item no-lines>\n              <button ion-button block  outline (click)="emailSent();" >Forget Password</button>\n               </ion-item>\n          </ion-list>\n      </form>\n  </div>\n</ion-content>\n<ion-footer>\n     <ion-navbar class="text-center">\n        <ion-title class="text-center" (click)="goRegiationPage();" color="appcolor" class="btnBorderNone">Sign Up</ion-title>\n    </ion-navbar>\n</ion-footer>\n'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RegistationPage = (function () {
    function RegistationPage(platform, _form, alertCtrl, menu, navCtrl, navParams, http, loading, toastCtrl, storage) {
        this.platform = platform;
        this._form = _form;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.btnSubmit = false;
        this.registationForm = this._form.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'mobileNo': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
            'city': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'area': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'address': [null],
            'tearC': [null],
            'adharno': [null],
            'oldPass': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            'newPass': ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, this.equalto('oldPass')]],
        });
    }
    RegistationPage.prototype.ionViewDidEnter = function () {
        //this.getTokenNo();
        this.menu.enable(false, 'menu1');
    };
    RegistationPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RegistationPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid) {
                return { 'equalTo': { isValid: isValid } };
            }
            else {
                return null;
            }
        };
    };
    RegistationPage.prototype.saveData = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var data = {
                name: _this.name,
                mobileNo: _this.mobileNo,
                email: _this.email,
                adharno: _this.adharno,
                address: _this.address,
                area: _this.area,
                city: _this.city,
                pin: _this.pin,
                state: _this.state,
                country: _this.cuntry,
                pass: _this.newPass,
                tokenNo: '1234',
            };
            _this.http.post('http://alcoholapp.thetechnologyleader.com/Login/registationMobile', JSON.stringify(data))
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                //var array = res.split('=');                       
                if (res == "yes") {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Login complited.',
                        duration: 2000
                    });
                    toast.present();
                    _this.storage.set('mobileNo', _this.mobileNo);
                    _this.storage.set('email', _this.email);
                    _this.navCtrl.pop();
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Registation done.',
                        duration: 2000
                    });
                    toast.present();
                    _this.navCtrl.pop();
                }
            }, function (err) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Registation done.',
                    duration: 2000
                });
                toast.present();
                _this.navCtrl.pop();
            });
        });
    };
    RegistationPage.prototype.termAlert = function () {
        if (this.teapCheack == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Terms & Conditions',
                subTitle: 'We welcome users to register on our digital platforms. We offer the below mentioned registration services which may be subject to change in the future. All changes will be appended in the terms and conditions page and communicated to existing users by email.',
                buttons: ['OK']
            });
            alert_1.present();
            this.btnSubmit = true;
        }
        else {
            this.btnSubmit = false;
        }
    };
    RegistationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registation',template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\registation\registation.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Registation</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <form [formGroup]="registationForm">\n        <ion-list inset>\n            <ion-item>\n                <ion-input type="text"  placeholder="Name *" formControlName="name" [(ngModel)]="name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="number" placeholder="Mobile Number *"  formControlName="mobileNo" [(ngModel)]="mobileNo"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="email" placeholder="Email *" formControlName="email" [(ngModel)]="email" ></ion-input>\n            </ion-item>\n             <ion-item>\n                <ion-input type="number" placeholder="Adhar Number" formControlName="adharno" [(ngModel)]="adharno"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-textarea type="text" placeholder="Address" formControlName="address" [(ngModel)]="address"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Area *" formControlName="area"  [(ngModel)]="area"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="City *" formControlName="city"  [(ngModel)]="city"></ion-input>\n            </ion-item>\n            <ion-item>\n\n                <ion-input type="text" placeholder="Adhar Number" formControlName="adharno"  [(ngModel)]="adharno"></ion-input>\n            </ion-item>\n            <ion-item>\n\n                <ion-input type="number" placeholder="PinCode" formControlName="address"  [(ngModel)]="pin"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="State" formControlName="address"  [(ngModel)]="state"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Country" formControlName="address" [(ngModel)]="cuntry"></ion-input>\n            </ion-item>\n             <ion-item>\n                <ion-input type="password" value="" placeholder="Password" formControlName="oldPass" [(ngModel)]="oldPass"  required></ion-input>\n            </ion-item>\n             <ion-item>\n                <ion-input type="password" value="" placeholder="Confirm Password" formControlName="newPass" [(ngModel)]="newPass"  required></ion-input>\n            </ion-item>\n\n     \n            <ion-item>\n                <ion-label color="blue" class="lblSize12">I understand & agree to the Terms & Conditions</ion-label>\n                <ion-checkbox color="dark"  formControlName="tearC" [(ngModel)]="teapCheack" (ionChange)="termAlert();"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n                <button ion-button full type="submit" class="lblSize" round  [disabled]="!registationForm.valid" *ngIf="btnSubmit" (click)="saveData();">Submit</button>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n<ion-footer>\n     <ion-navbar class="text-center">\n        <ion-title class="text-center" (click)="back()" color="appcolor" class="btnBorderNone">Already Sign up!Sign in Me.</ion-title>\n    </ion-navbar>\n</ion-footer>\n'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\registation\registation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], RegistationPage);
    return RegistationPage;
}());

//# sourceMappingURL=registation.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecficproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SpecficproductPage = (function () {
    function SpecficproductPage(alertCtrl, navCtrl, navParams, http, loading, toastCtrl, storage) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.id = navParams.get('param1');
        this.getData();
    }
    SpecficproductPage.prototype.getData = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var data = {
                id: _this.id,
            };
            _this.http.post('http://alcoholapp.thetechnologyleader.com/AddProduct/getProIdWise', JSON.stringify(data))
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                _this.getProductData = res.productListSecfic;
                loader.dismiss();
            }, function (err) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Data not found.',
                    duration: 2000
                });
                toast.present();
            });
        });
    };
    SpecficproductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-specficproduct',template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\specficproduct\specficproduct.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Product</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="slider">  \n        <ion-slides *ngIf="getProductData && getProductData.length"  autoplay="5000" loop="false" speed="500"  pager="true">\n            <ion-slide *ngFor="let Image of getProductData">\n                <img src="{{Image.imagePath}}" class="prodImage" alt="Product Image">\n            </ion-slide>                 \n        </ion-slides> \n       \n    </div>\n     <div *ngFor="let item of getProductData">\n         <ion-label class="proName" color="dark">{{item.productName}}</ion-label>\n        <ion-label class="proPrice" color="dark">Rs.  {{item.productPrice}}</ion-label>\n    </div>\n    <div class="sharePro img-circle">\n        <ion-icon name="share" color="shareButton"></ion-icon>\n    </div>\n\n</ion-content>\n<ion-footer>\n    <ion-grid>\n        <ion-row>     \n            <ion-col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 >\n                <button ion-button icon-only block   clear>\n                    <ion-icon name="arrow-round-back" ></ion-icon>\n                </button>\n            </ion-col>     \n            <ion-col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2>\n                <button ion-button icon-only  clear>\n                        <ion-icon name="cart"></ion-icon>4\n                </button>\n            </ion-col>\n            <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 >\n                <button ion-button icon-only   color="dark" clear>\n                    <ion-icon ios="ios-share" md="md-share" color="shareButton"></ion-icon>\n                </button>   \n            </ion-col>  \n            <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 >\n                <button ion-button icon-only   color="dark" clear>\n                        <ion-icon ios="ios-create" md="md-create" color="blue"></ion-icon>\n                </button>\n            </ion-col>  \n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\specficproduct\specficproduct.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SpecficproductPage);
    return SpecficproductPage;
}());

//# sourceMappingURL=specficproduct.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupportPage = (function () {
    function SupportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SupportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupportPage');
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\support\support.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Support</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\support\support.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		687,
		7
	],
	"../pages/cart/cart.module": [
		688,
		6
	],
	"../pages/chatroom/chatroom.module": [
		689,
		5
	],
	"../pages/chatuserlist/chatuserlist.module": [
		690,
		4
	],
	"../pages/login/login.module": [
		691,
		3
	],
	"../pages/registation/registation.module": [
		692,
		2
	],
	"../pages/specficproduct/specficproduct.module": [
		693,
		1
	],
	"../pages/support/support.module": [
		694,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homedata_homedata__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__specficproduct_specficproduct__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, personservice) {
        this.navCtrl = navCtrl;
        this.personservice = personservice;
        this.searchTerm = '';
        this.sliderDataLoad();
        this.getProductData();
    }
    HomePage.prototype.sliderDataLoad = function () {
        var _this = this;
        this.personservice.sliderLoad()
            .then(function (data) {
            _this.sliderImageName = data;
        });
    };
    HomePage.prototype.getProductData = function () {
        var _this = this;
        this.personservice.getProductList()
            .then(function (data) {
            _this.getProduct = data;
        });
    };
    HomePage.prototype.toggleSearch = function () {
        this.toggled = this.toggled ? false : true;
    };
    HomePage.prototype.setFilteredItems = function () {
        this.getProduct = this.personservice.filterItems(this.searchTerm);
    };
    //open next page
    HomePage.prototype.secficProOpen = function (value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__specficproduct_specficproduct__["a" /* SpecficproductPage */], {
            "param1": value
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only clear>\n  <ion-icon name="arrow-dropdown" color="dark" ></ion-icon>\n  <ion-searchbar [showCancelButton]="true"  [(ngModel)]="searchTerm" (ionCancel)="toggleSearch()" (ionInput)="setFilteredItems()" placeholder="Product Name"></ion-searchbar>\n    <ion-icon name="chatboxes" color="dark"></ion-icon>\n</button>\n  </ion-navbar>     \n</ion-header>       \n\n<ion-content>    \n   <div class="slider">  \n        <ion-slides *ngIf="sliderImageName && sliderImageName.length"  autoplay="5000" loop="true" speed="500"  pager="true">\n            <ion-slide *ngFor="let Image of sliderImageName">\n                <img src="{{Image.imagePath}}" class="img" alt="Product Image">\n            </ion-slide>                 \n        </ion-slides>          \n    </div> \n    <ion-grid padding>\n  <ion-row>\n    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 *ngFor="let item of getProduct" (click)="secficProOpen(item.id);">\n             <img src="{{item.imagePath}}" class="prodImage" alt="proName"/>\n            <span class="proPrice">Rs.  {{item.productPrice}}</span><br/>\n            <span class="proName">{{item.productName}}</span>\n            \n    </ion-col>  \n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_homedata_homedata__["a" /* HomedataProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_homedata_homedata__["a" /* HomedataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomedataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomedataProvider = (function () {
    function HomedataProvider(http) {
        this.http = http;
        this.data = null;
        this.getProduct = null;
    }
    HomedataProvider.prototype.sliderLoad = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://alcoholapp.thetechnologyleader.com/AllInOne/sliderDataMobile')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data.slider;
                resolve(_this.data);
            });
        });
    };
    HomedataProvider.prototype.filterItems = function (searchTerm) {
        return this.getProduct.filter(function (item) {
            return (item.productName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        });
    };
    HomedataProvider.prototype.getProductList = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://alcoholapp.thetechnologyleader.com/AddProduct/getProductList')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data.productList;
                _this.getProduct = data.productList;
                resolve(_this.data);
            });
        });
    };
    HomedataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HomedataProvider);
    return HomedataProvider;
}());

//# sourceMappingURL=homedata.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var CategoryPage = (function () {
    function CategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\category\category.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Category</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatroomPage = (function () {
    function ChatroomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatroomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatroomPage');
    };
    ChatroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatroom',template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\chatroom\chatroom.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\chatroom\chatroom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChatroomPage);
    return ChatroomPage;
}());

//# sourceMappingURL=chatroom.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatuserlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatuserlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatuserlistPage = (function () {
    function ChatuserlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatuserlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatuserlistPage');
    };
    ChatuserlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatuserlist',template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\pages\chatuserlist\chatuserlist.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>User List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\pages\chatuserlist\chatuserlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChatuserlistPage);
    return ChatuserlistPage;
}());

//# sourceMappingURL=chatuserlist.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_registation_registation__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_category_category__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chatroom_chatroom__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_specficproduct_specficproduct__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_support_support__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_homedata_homedata__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_registation_registation__["a" /* RegistationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_specficproduct_specficproduct__["a" /* SpecficproductPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_support_support__["a" /* SupportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsPlacement: 'bottom', tabsHideOnSubPages: true }, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatroom/chatroom.module#ChatroomPageModule', name: 'ChatroomPage', segment: 'chatroom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatuserlist/chatuserlist.module#ChatuserlistPageModule', name: 'ChatuserlistPage', segment: 'chatuserlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registation/registation.module#RegistationPageModule', name: 'RegistationPage', segment: 'registation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specficproduct/specficproduct.module#SpecficproductPageModule', name: 'SpecficproductPage', segment: 'specficproduct', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_registation_registation__["a" /* RegistationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_specficproduct_specficproduct__["a" /* SpecficproductPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_support_support__["a" /* SupportPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_homedata_homedata__["a" /* HomedataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, storage, statusBar, splashScreen) {
        //this.storage.remove('userId');
        //this.storage.remove('mobileNo');
        //this.storage.remove('password');  
        var _this = this;
        this.storage = storage;
        this.storage.get('userId').then(function (val) {
            _this.storage.get('mobileNo').then(function (val2) {
                if (val != null && val2 != null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                }
            });
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            // splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Project\Ionic\AlcoholApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\Project\Ionic\AlcoholApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map