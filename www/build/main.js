webpackJsonp([8],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button menuToggle style="color:white">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Home page</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p> home page content</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOfferAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_joboffer__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_joboffer_service__ = __webpack_require__(71);
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
 * Generated class for the JobOfferAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobOfferAddPage = (function () {
    function JobOfferAddPage(formBuilder, navCtrl, navParams, datePipe, jobofferService, viewCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePipe = datePipe;
        this.jobofferService = jobofferService;
        this.viewCtrl = viewCtrl;
        this.jobofferForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contactN: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            companyN: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            companyA: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contactE: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            desc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            bd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ed: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            contactNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            fow: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            salaryE: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    JobOfferAddPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad JobOfferAddPage');
    };
    JobOfferAddPage.prototype.submitForm = function () {
        console.log(this.jobofferForm.value.desc);
        var newJobOffer = new __WEBPACK_IMPORTED_MODULE_3__entities_joboffer__["a" /* Joboffer */](this.jobofferForm.value.desc, this.datePipe.transform(this.jobofferForm.value.bd, 'yyyy-MM-dd'), this.datePipe.transform(this.jobofferForm.value.ed, 'yyyy-MM-dd'), this.jobofferForm.value.contactNumber, this.jobofferForm.value.fow, this.jobofferForm.value.salaryE, this.jobofferForm.value.companyN, this.jobofferForm.value.companyA, this.jobofferForm.value.contactE, this.jobofferForm.value.contactN, this.jobofferForm.value.title);
        this.jobofferService.addJobOffer(newJobOffer).subscribe(function (jobOfferAdded) {
        });
        this.jobofferService.jobOfferAdded.emit(newJobOffer);
        this.viewCtrl.dismiss(false);
    };
    JobOfferAddPage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove);
    };
    JobOfferAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-offer-add',template:/*ion-inline-start:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\job-offer-page-group\job-offer-add\job-offer-add.html"*/'<!--\n  Generated template for the JobOfferAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>jobOfferAdd</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="jobofferForm" (ngSubmit)="submitForm()">\n    <ion-item>\n      <ion-label floating>Title</ion-label >\n      <ion-input required type="text" formControlName="title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Description</ion-label >\n      <ion-textarea required formControlName="desc"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Contact name</ion-label >\n      <ion-input required type="text" formControlName="contactN"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Contact email</ion-label >\n      <ion-input required type="text" formControlName="contactE"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Contact number</ion-label >\n      <ion-input required type="number" formControlName="contactNumber"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Company name</ion-label >\n      <ion-input required type="text" formControlName="companyN"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Company Address</ion-label >\n      <ion-input required type="text" formControlName="companyA"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Begin date</ion-label >\n      <ion-datetime required formControlName="bd" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" >\n      </ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>End date</ion-label >\n      <ion-datetime required formControlName="ed" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" >\n      </ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Field of work</ion-label >\n      <ion-input required type="text" formControlName="fow"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Salary estimate</ion-label >\n      <ion-input required  type="text" type="number" formControlName="salaryE"></ion-input>\n    </ion-item>\n\n\n    <div text-center class="mTop">\n    <button ion-button  type="submit" [disabled]="!jobofferForm.valid">Submit</button>\n      <button ion-button color="danger" (click)="onClose()">Close</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\job-offer-page-group\job-offer-add\job-offer-add.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_5__services_joboffer_service__["a" /* JobofferService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], JobOfferAddPage);
    return JobOfferAddPage;
}());

//# sourceMappingURL=job-offer-add.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_joboffer_service__ = __webpack_require__(71);
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
 * Generated class for the JobOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobOfferPage = (function () {
    function JobOfferPage(jobOfferService, viewCtrl, navParams) {
        this.jobOfferService = jobOfferService;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        //joboffer:Joboffer=null;
        this.etat = false;
        this.lat = 34.431140;
        this.lng = 8.775656;
        this.MapTypeRc = 'satellite';
    }
    JobOfferPage.prototype.ngOnInit = function () {
    };
    JobOfferPage.prototype.performForwardGeocoding = function (val) {
        var _this = this;
        this.jobOfferService.getGEO(val).subscribe(function (resp) {
            _this.lat = resp.results[0].geometry.location.lat;
            _this.lng = resp.results[0].geometry.location.lng;
        });
        this.etat = !this.etat;
    };
    JobOfferPage.prototype.ionViewDidLoad = function () {
        this.title = this.navParams.get('title');
        this.description = this.navParams.get('description');
        this.begindate = this.navParams.get('begindate');
        this.enddate = this.navParams.get('enddate');
        this.contactnumber = this.navParams.get('contactnumber');
        this.fieldOfWork = this.navParams.get('fieldOfWork');
        this.salaryEstimate = this.navParams.get('salaryEstimate');
        this.companyName = this.navParams.get('companyName');
        this.companyAdress = this.navParams.get('companyAdress');
        this.contactEmail = this.navParams.get('contactEmail');
        this.contactName = this.navParams.get('contactName');
    };
    JobOfferPage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove);
    };
    JobOfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-offer',template:/*ion-inline-start:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\job-offer-page-group\job-offer\job-offer.html"*/'<!--\n  Generated template for the QuotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n  <ion-card padding text-left>\n    <ion-card-content>\n\n      <p><b>Description : </b> {{description}}</p>\n      <hr>\n      <p><b>From : </b>{{begindate}} </p>\n      <hr>\n      <p><b>To : </b>{{enddate}}</p>\n      <hr>\n      <p><b>Contact name : </b>{{contactName}}</p>\n      <p><b>Contact number : </b>{{contactnumber}}</p>\n      <p><b>Contact email : </b>{{contactEmail}}</p>\n      <hr> <hr>\n      <p><b>Company name : </b>{{companyName}}</p>\n      <p><b>Company address : </b>{{companyAdress}}</p>\n\n\n      <ion-grid class="button-group">\n        <ion-row>\n\n            <button\n              ion-button\n              small\n              outline\n              color="danger"\n              (click)="this.MapTypeRc=\'roadmap\'">Map</button>\n            <button\n              ion-button\n              small\n              outline\n              color="danger"\n              (click)="this.MapTypeRc=\'satellite\'">Satellite</button>\n            <button\n              ion-button\n              small\n              outline\n              color="danger"\n              (click)="performForwardGeocoding(companyAdress)">Show on map</button>\n\n\n        </ion-row>\n      </ion-grid>\n\n\n      <agm-map *ngIf="etat" [latitude]="lat"  [longitude]="lng" [zoom]="16"  [mapTypeId]="MapTypeRc" >\n        <agm-marker [latitude]="lat" [longitude]="lng">\n          <agm-snazzy-info-window  [maxWidth]="200" [closeWhenOthersOpen]="true">\n            <ng-template>\n              <p>{{lat}}</p>\n            </ng-template>\n          </agm-snazzy-info-window>\n        </agm-marker>\n      </agm-map>\n\n      <hr> <hr>\n      <p><b>Salary estimate : </b>{{salaryEstimate}}</p>\n      <p><b>Field of work : </b>{{fieldOfWork}}</p>\n    </ion-card-content>\n\n  </ion-card>\n\n  <button small ion-button color="danger" (click)="onClose()">Close</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\job-offer-page-group\job-offer\job-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_joboffer_service__["a" /* JobofferService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], JobOfferPage);
    return JobOfferPage;
}());

//# sourceMappingURL=job-offer.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefugeeListJobOffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the RefugeeListJobOffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RefugeeListJobOffersPage = (function () {
    function RefugeeListJobOffersPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    RefugeeListJobOffersPage.prototype.ionViewDidLoad = function () {
        this.refugees = this.navParams.get('refugees');
    };
    RefugeeListJobOffersPage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove);
    };
    RefugeeListJobOffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-refugee-list-job-offers',template:/*ion-inline-start:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\job-offer-page-group\refugee-list-job-offers\refugee-list-job-offers.html"*/'<!--\n  Generated template for the RefugeeListJobOffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>refugeeListJobOffers</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card padding *ngFor="let r of refugees">\n    <ion-card-header >\n      {{r.firstname}} {{r.lastName}}\n    </ion-card-header>\n\n    <ion-card-content>\n\n    <p><b>Email : </b>{{r.email}}</p>\n    <p><b>Gender: </b>{{r.sex}}</p>\n    <p><b>Date of birth: </b>{{r.dateOfBirth}}</p>\n    <p><b>Nationality: </b>{{r.nationality}}</p>\n    <p><b>French language level : </b>{{r.frenchlanguageLevel}}</p>\n    <p><b>English language level : </b>{{r.englishlanguageLevel}}</p>\n    <p><b>Highest degree : </b>{{r.highestDegree}}</p>\n    <p><b>Phone number : </b>{{r.phoneNumber}}</p>\n    </ion-card-content>\n\n  </ion-card>\n  <div text-center >\n  <button small text-center ion-button color="danger" (click)="onClose()">Close</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\job-offer-page-group\refugee-list-job-offers\refugee-list-job-offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], RefugeeListJobOffersPage);
    return RefugeeListJobOffersPage;
}());

//# sourceMappingURL=refugee-list-job-offers.js.map

/***/ }),

/***/ 182:
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
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		710,
		7
	],
	"../pages/job-offer-page-group/job-offer-add/job-offer-add.module": [
		711,
		6
	],
	"../pages/job-offer-page-group/job-offer/job-offer.module": [
		712,
		5
	],
	"../pages/job-offer-page-group/job-offers/job-offers.module": [
		713,
		4
	],
	"../pages/job-offer-page-group/refugee-list-job-offers/refugee-list-job-offers.module": [
		714,
		3
	],
	"../pages/login/login.module": [
		715,
		2
	],
	"../pages/tabs/tabs.module": [
		716,
		1
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
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_snazzy_info_window__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_job_offer_page_group_job_offers_job_offers__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_joboffer_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_job_offer_page_group_job_offer_job_offer__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_job_offer_page_group_job_offer_add_job_offer_add__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_job_offer_page_group_refugee_list_job_offers_refugee_list_job_offers__ = __webpack_require__(169);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_job_offer_page_group_job_offers_job_offers__["a" /* JobOffersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_job_offer_page_group_job_offer_job_offer__["a" /* JobOfferPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_job_offer_page_group_job_offer_add_job_offer_add__["a" /* JobOfferAddPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_job_offer_page_group_refugee_list_job_offers_refugee_list_job_offers__["a" /* RefugeeListJobOffersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/job-offer-add/job-offer-add.module#JobOfferAddPageModule', name: 'JobOfferAddPage', segment: 'job-offer-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/job-offer/job-offer.module#JobOfferPageModule', name: 'JobOfferPage', segment: 'job-offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/job-offers/job-offers.module#JobOffersPageModule', name: 'JobOffersPage', segment: 'job-offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/refugee-list-job-offers/refugee-list-job-offers.module#RefugeeListJobOffersPageModule', name: 'RefugeeListJobOffersPage', segment: 'refugee-list-job-offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAHcVsCeJyyQ7gDW8gaFyquAkoxQNN6dZA'
                }),
                __WEBPACK_IMPORTED_MODULE_10__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_job_offer_page_group_job_offers_job_offers__["a" /* JobOffersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_job_offer_page_group_job_offer_job_offer__["a" /* JobOfferPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_job_offer_page_group_job_offer_add_job_offer_add__["a" /* JobOfferAddPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_job_offer_page_group_refugee_list_job_offers_refugee_list_job_offers__["a" /* RefugeeListJobOffersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__services_joboffer_service__["a" /* JobofferService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Joboffer; });
var Joboffer = (function () {
    function Joboffer(description, begindate, enddate, contactnumber, fieldOfWork, salaryEstimate, companyName, companyAdress, contactEmail, contactName, title, districtchef, campchef, id) {
        this.description = description;
        this.begindate = begindate;
        this.enddate = enddate;
        this.contactnumber = contactnumber;
        this.fieldOfWork = fieldOfWork;
        this.salaryEstimate = salaryEstimate;
        this.companyName = companyName;
        this.companyAdress = companyAdress;
        this.contactEmail = contactEmail;
        this.contactName = contactName;
        this.title = title;
        this.districtchef = districtchef;
        this.campchef = campchef;
        this.id = id;
    }
    return Joboffer;
}());

//# sourceMappingURL=joboffer.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_job_offer_page_group_job_offers_job_offers__ = __webpack_require__(86);
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
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.loginPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.joboffersPage = __WEBPACK_IMPORTED_MODULE_6__pages_job_offer_page_group_job_offers_job_offers__["a" /* JobOffersPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\app\app.html"*/'<ion-menu [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Main menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="onLoad(tabsPage)">\n        <ion-icon name="home" item-left></ion-icon>\n        Home\n      </button>\n      <button ion-item (click)="onLoad(joboffersPage)">\n        <ion-icon name="briefcase" item-left></ion-icon>\n        Job offers\n      </button>\n\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <page-tabs></page-tabs>\n  </ion-footer>\n</ion-menu>\n<ion-nav [root]="loginPage" #nav></ion-nav>\n'/*ion-inline-end:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobofferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobofferService = (function () {
    function JobofferService(httpService) {
        this.httpService = httpService;
        this.jobOfferSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.jobOfferAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.jobOffers = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.jobOffersDetailList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.etat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.bestCands = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        //http://10.0.2.2:18080/ emulated device
        //localhost : google chrome port forwarding
        this.url = "http://localhost:18080/refugeesCamp-web/api/joboffers";
        this.urlGEO = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        this.urlUserService = "http://localhost:18080/refugeesCamp-web/api/users";
    }
    //listing
    JobofferService.prototype.getAllJobOffers = function () {
        return this.httpService.get(this.url)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.status + " " + error.statusText);
        });
    };
    JobofferService.prototype.getGEO = function (address) {
        return this.httpService.get(this.urlGEO + address + '&key=AIzaSyAHcVsCeJyyQ7gDW8gaFyquAkoxQNN6dZA');
    };
    JobofferService.prototype.getJobOfferById = function (jobOffer_id) {
        return this.httpService.get(this.url + '/' + jobOffer_id)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.status + " " + error.statusText);
        });
    };
    JobofferService.prototype.getJobOffersByDistrictChiefId = function (districtChief_id) {
        return this.httpService.get(this.urlUserService + '/' + districtChief_id + '/joboffers')
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.status + " " + error.statusText);
        });
    };
    //basic ops
    JobofferService.prototype.addJobOffer = function (jo) {
        //check if you can add json stringify here
        return this.httpService.post(this.url, jo);
    };
    JobofferService.prototype.updateJobOffer = function (jo) {
        return this.httpService.put(this.url, jo);
    };
    JobofferService.prototype.deleteJobOffer = function (jobOffer_id) {
        return this.httpService.delete(this.url + '/' + jobOffer_id);
    };
    //metier
    JobofferService.prototype.getBestCandidatesAndEmailThem = function (jobOffer_id) {
        return this.httpService.get(this.url + '/' + jobOffer_id + '/best_candidates');
    };
    JobofferService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], JobofferService);
    return JobofferService;
}());

//# sourceMappingURL=joboffer.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_joboffer_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_offer_job_offer__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_offer_add_job_offer_add__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__refugee_list_job_offers_refugee_list_job_offers__ = __webpack_require__(169);
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
 * Generated class for the JobOffersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JobOffersPage = (function () {
    function JobOffersPage(navCtrl, jobOfferService, navParams, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.jobOfferService = jobOfferService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    JobOffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.jobOfferService.getAllJobOffers().subscribe(function (joboffers) {
            _this.jobOffers = joboffers;
        });
        if (this.jobOfferService.jobOfferAdded) {
            this.jobOfferService.jobOfferAdded.subscribe(function (jo) {
                return _this.jobOffers.splice(0, 0, jo);
            });
        }
    };
    JobOffersPage.prototype.onViewJO = function (j) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__job_offer_job_offer__["a" /* JobOfferPage */], j);
        this.jobOfferService.jobOfferSelected.emit(j);
        modal.present();
    };
    JobOffersPage.prototype.onAddJO = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__job_offer_add_job_offer_add__["a" /* JobOfferAddPage */]);
        modal.present();
    };
    JobOffersPage.prototype.onDeleteJO = function (j) {
        this.jobOfferService.deleteJobOffer(j.id).subscribe();
        this.jobOffers.splice(this.jobOffers.indexOf(j), 1);
    };
    JobOffersPage.prototype.onBestCandidates = function (j) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Retreiving candidates list & emailing them ...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
        this.jobOfferService.getBestCandidatesAndEmailThem(j.id).subscribe(function (refugees) {
            _this.refugees = refugees;
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__refugee_list_job_offers_refugee_list_job_offers__["a" /* RefugeeListJobOffersPage */], { refugees: _this.refugees });
            modal.present();
        });
    };
    JobOffersPage.prototype.ionViewDidLoad = function () {
    };
    JobOffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-offers',template:/*ion-inline-start:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\job-offer-page-group\job-offers\job-offers.html"*/'<!--\n  Generated template for the JobOffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button menuToggle style="color:white">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>Job Offers</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-card class="cardRC">\n    <img src="assets/imgs/space-desk-workspace-coworking.jpg"/>\n    <div style="position: absolute" class="card-title">Job Offers</div>\n\n  </ion-card>\n<!--pass JO here-->\n  <button class="mLeft" (click)="onAddJO()" ion-button small outline item-end icon-left>\n    <ion-icon name="add-circle"></ion-icon>\n    Add new job offer\n  </button>\n\n\n  <ion-card padding *ngFor="let j of jobOffers">\n    <ion-card-header >\n      {{j.title}}\n    </ion-card-header>\n\n    <ion-card-content>\n      <p>{{j.description }}</p>\n    </ion-card-content>\n\n\n\n    <ion-row>\n      <ion-col text-right>\n\n        <button\n          ion-button\n          color="default"\n          outline\n          round\n          small (click)="onViewJO(j)">\n          Details</button>\n        <button\n          ion-button\n          color="secondary"\n          outline\n          round\n          small (click)="onBestCandidates(j)">\n          Best candidates</button>\n        <button\n          ion-button\n          outline\n          round\n          small\n          color="danger" (click)="onDeleteJO(j)">Delete</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\job-offer-page-group\job-offers\job-offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_joboffer_service__["a" /* JobofferService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], JobOffersPage);
    return JobOffersPage;
}());

//# sourceMappingURL=job-offers.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(88);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, viewCtrl, platform, http) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.http = http;
    }
    LoginPage.prototype.login = function () {
        //Navigate to home page
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        //this.nav.parent.select(3);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Refugees Camp</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center padding>\n  <ion-list>\n  <img block class="mTopAndWidth" text-center src="assets/imgs/logoRC.png"/>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input [(ngModel)]="username" type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input [(ngModel)]="password"  type="password" value=""></ion-input>\n    </ion-item>\n\n\n\n  </ion-list>\n  <div padding text-center>\n    <button ion-button outline primary  large  (click)="login()">Sign In</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_offer_page_group_job_offers_job_offers__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage() {
        this.joboffersPage = __WEBPACK_IMPORTED_MODULE_2__job_offer_page_group_job_offers_job_offers__["a" /* JobOffersPage */];
        this.homePage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.loginPage = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\tabs\tabs.html"*/'\n<ion-tabs>\n\n  <ion-tab [root]="homePage" tabTitle="Home" tabIcon="book"></ion-tab>\n  <!-- add this here to navigate [root]="joboffersPage"-->\n  <ion-tab  tabTitle="Events" tabIcon="briefcase"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\m\Desktop\angular cli\ionic2\refugeesCampApp\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[374]);
//# sourceMappingURL=main.js.map