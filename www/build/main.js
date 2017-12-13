webpackJsonp([12],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseService = (function () {
    function CourseService(httpC) {
        this.httpC = httpC;
        this.courseS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.courseAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.etat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.courses = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6NSwicm9sZSI6IkRpc3RyaWN0Q2hlZiJ9.cfzBmV6AURP6V134XuCakqNGOqfD_SsHIK9j1mvFG3rWZj5RLK4-wS_FvoiBCX-uJhTgbOtb2D3gN5YRRvxhBg";
        // header: HttpHeaders;
        // httpOptions = {
        //   headers: new HttpHeaders({ 'Authorization': this.token , 'Content-Type': 'application/json'})
        // };
        this.url = "http://localhost:18080/refugeesCamp-web/api/course";
        // this.header = new HttpHeaders();
        // this.header.set('Authorization', this.token);
        // this.header.set('Content-Type', 'application/json');
    }
    CourseService.prototype.getAll = function () {
        return this.httpC.get(this.url)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.status + " " + error.statusText);
        });
    };
    CourseService.prototype.addCour = function (cr) {
        return this.httpC.post(this.url, cr);
    };
    CourseService.prototype.update = function (c) {
        return this.httpC.put(this.url, c);
    };
    CourseService.prototype.delete = function (cour_id) {
        return this.httpC.delete(this.url + '/' + cour_id);
    };
    CourseService.prototype.getCourseById = function (course_id) {
        return this.httpC.get(this.url + '/' + course_id)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.status + " " + error.statusText);
        });
    };
    CourseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], CourseService);
    return CourseService;
}());

//# sourceMappingURL=course.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_URL; });
/* unused harmony export REGISTER_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USERS_URL; });
/* unused harmony export REFUGEES_URL */
var LOGIN_URL = 'http://localhost:18080/refugeesCamp-web/api/home/login';
var REGISTER_URL = 'http://localhost:18080/refugeesCamp-web/api/';
var USERS_URL = 'http://localhost:18080/refugeesCamp-web/api/users';
var REFUGEES_URL = 'http://localhost:18080/refugeesCamp-web/api/Refugees';
//# sourceMappingURL=java.urls.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_course_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_course__ = __webpack_require__(413);
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
 * Generated class for the AddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCoursePage = (function () {
    function AddCoursePage(viewCtrl, formBuilder, datePipe, cs, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.cs = cs;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.courseForm = this.formBuilder.group({
            nam: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            descriptio: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            startdat: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            enddat: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    AddCoursePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AddCoursePage');
    };
    AddCoursePage.prototype.submitForm = function () {
        console.log(this.courseForm.value.desc);
        var newCourse = new __WEBPACK_IMPORTED_MODULE_5__entities_course__["a" /* Course */](this.courseForm.value.desc, this.datePipe.transform(this.courseForm.value.enddat, 'yyyy-MM-dd'), this.datePipe.transform(this.courseForm.value.startdat, 'yyyy-MM-dd'), this.courseForm.value.descriptio, this.courseForm.value.nam);
        this.cs.addCour(newCourse).subscribe(function (courseAdd) { });
        this.cs.courseAdd.emit(newCourse);
        this.viewCtrl.dismiss(false);
    };
    AddCoursePage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove);
    };
    AddCoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-course',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\course-group\add-course\add-course.html"*/'<!--\n\n  Generated template for the AddCoursePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>AddCourse</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="courseForm" (ngSubmit)="submitForm()">\n\n\n\n    <ion-item>\n\n      <ion-label floating>Name</ion-label >\n\n      <ion-input required type="text" formControlName="nam"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Description</ion-label >\n\n      <ion-textarea required formControlName="descriptio"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Startdate</ion-label >\n\n      <ion-datetime required formControlName="startdat" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" >\n\n      </ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Enddate</ion-label >\n\n      <ion-datetime required formControlName="enddat" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" >\n\n      </ion-datetime>\n\n    </ion-item>\n\n\n\n    <div text-center>\n\n      <button ion-button  type="submit" [disabled]="!courseForm.valid">Add</button>\n\n      <button ion-button color="danger" (click)="onClose()">Exit</button>\n\n    </div>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\course-group\add-course\add-course.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_4__services_course_service__["a" /* CourseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddCoursePage);
    return AddCoursePage;
}());

//# sourceMappingURL=add-course.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button menuToggle style="color:white">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Home page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<p> home page content</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursesPage = (function () {
    function CoursesPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.etat = false;
    }
    CoursesPage.prototype.ngOnInit = function () {
    };
    CoursesPage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.get('name');
        this.description = this.navParams.get('description');
        this.enddate = this.navParams.get('enddate');
        this.name = this.navParams.get('name');
        this.startdate = this.navParams.get('startdate');
    };
    CoursesPage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove);
    };
    CoursesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-courses',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\course-group\courses\courses.html"*/'<!--\n\n  Generated template for the CoursesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{name}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center>\n\n\n\n  <ion-card padding text-left>\n\n    <ion-card-content>\n\n\n\n      <p><b>Description : </b> {{description}}</p>\n\n      <hr>\n\n      <p><b>From : </b>{{startdate}} </p>\n\n      <hr>\n\n      <p><b>To : </b>{{enddate}}</p>\n\n\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n  <button small ion-button color="danger" (click)="onClose()">Exit</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\course-group\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoursesPage);
    return CoursesPage;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_joboffer_service__ = __webpack_require__(72);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-job-offer',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\job-offer-page-group\job-offer\job-offer.html"*/'<!--\n\n  Generated template for the QuotePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding text-center>\n\n  <ion-card padding text-left>\n\n    <ion-card-content>\n\n\n\n      <p><b>Description : </b> {{description}}</p>\n\n      <hr>\n\n      <p><b>From : </b>{{begindate}} </p>\n\n      <hr>\n\n      <p><b>To : </b>{{enddate}}</p>\n\n      <hr>\n\n      <p><b>Contact name : </b>{{contactName}}</p>\n\n      <p><b>Contact number : </b>{{contactnumber}}</p>\n\n      <p><b>Contact email : </b>{{contactEmail}}</p>\n\n      <hr> <hr>\n\n      <p><b>Company name : </b>{{companyName}}</p>\n\n      <p><b>Company address : </b>{{companyAdress}}</p>\n\n\n\n\n\n      <ion-grid class="button-group">\n\n        <ion-row>\n\n\n\n            <button\n\n              ion-button\n\n              small\n\n              outline\n\n              color="danger"\n\n              (click)="this.MapTypeRc=\'roadmap\'">Map</button>\n\n            <button\n\n              ion-button\n\n              small\n\n              outline\n\n              color="danger"\n\n              (click)="this.MapTypeRc=\'satellite\'">Satellite</button>\n\n            <button\n\n              ion-button\n\n              small\n\n              outline\n\n              color="danger"\n\n              (click)="performForwardGeocoding(companyAdress)">Show on map</button>\n\n\n\n\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n      <agm-map *ngIf="etat" [latitude]="lat"  [longitude]="lng" [zoom]="16"  [mapTypeId]="MapTypeRc" >\n\n        <agm-marker [latitude]="lat" [longitude]="lng">\n\n          <agm-snazzy-info-window  [maxWidth]="200" [closeWhenOthersOpen]="true">\n\n            <ng-template>\n\n              <p>{{lat}}</p>\n\n            </ng-template>\n\n          </agm-snazzy-info-window>\n\n        </agm-marker>\n\n      </agm-map>\n\n\n\n      <hr> <hr>\n\n      <p><b>Salary estimate : </b>{{salaryEstimate}}</p>\n\n      <p><b>Field of work : </b>{{fieldOfWork}}</p>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n  <button small ion-button color="danger" (click)="onClose()">Close</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\job-offer-page-group\job-offer\job-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_joboffer_service__["a" /* JobofferService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], JobOfferPage);
    return JobOfferPage;
}());

//# sourceMappingURL=job-offer.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOfferAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_joboffer__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_joboffer_service__ = __webpack_require__(72);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-job-offer-add',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\job-offer-page-group\job-offer-add\job-offer-add.html"*/'<!--\n\n  Generated template for the JobOfferAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>jobOfferAdd</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="jobofferForm" (ngSubmit)="submitForm()">\n\n    <ion-item>\n\n      <ion-label floating>Title</ion-label >\n\n      <ion-input required type="text" formControlName="title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Description</ion-label >\n\n      <ion-textarea required formControlName="desc"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Contact name</ion-label >\n\n      <ion-input required type="text" formControlName="contactN"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Contact email</ion-label >\n\n      <ion-input required type="text" formControlName="contactE"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Contact number</ion-label >\n\n      <ion-input required type="number" formControlName="contactNumber"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Company name</ion-label >\n\n      <ion-input required type="text" formControlName="companyN"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Company Address</ion-label >\n\n      <ion-input required type="text" formControlName="companyA"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Begin date</ion-label >\n\n      <ion-datetime required formControlName="bd" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" >\n\n      </ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>End date</ion-label >\n\n      <ion-datetime required formControlName="ed" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" >\n\n      </ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Field of work</ion-label >\n\n      <ion-input required type="text" formControlName="fow"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Salary estimate</ion-label >\n\n      <ion-input required  type="text" type="number" formControlName="salaryE"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <div text-center class="mTop">\n\n    <button ion-button  type="submit" [disabled]="!jobofferForm.valid">Submit</button>\n\n      <button ion-button color="danger" (click)="onClose()">Close</button>\n\n    </div>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\job-offer-page-group\job-offer-add\job-offer-add.html"*/,
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefugeeListJobOffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-refugee-list-job-offers',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\job-offer-page-group\refugee-list-job-offers\refugee-list-job-offers.html"*/'<!--\n\n  Generated template for the RefugeeListJobOffersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>refugeeListJobOffers</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card padding *ngFor="let r of refugees">\n\n    <ion-card-header >\n\n      {{r.firstname}} {{r.lastName}}\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n\n\n    <p><b>Email : </b>{{r.email}}</p>\n\n    <p><b>Gender: </b>{{r.sex}}</p>\n\n    <p><b>Date of birth: </b>{{r.dateOfBirth}}</p>\n\n    <p><b>Nationality: </b>{{r.nationality}}</p>\n\n    <p><b>French language level : </b>{{r.frenchlanguageLevel}}</p>\n\n    <p><b>English language level : </b>{{r.englishlanguageLevel}}</p>\n\n    <p><b>Highest degree : </b>{{r.highestDegree}}</p>\n\n    <p><b>Phone number : </b>{{r.phoneNumber}}</p>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  <div text-center >\n\n  <button small text-center ion-button color="danger" (click)="onClose()">Close</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\job-offer-page-group\refugee-list-job-offers\refugee-list-job-offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], RefugeeListJobOffersPage);
    return RefugeeListJobOffersPage;
}());

//# sourceMappingURL=refugee-list-job-offers.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefugeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_refugees_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the RefugeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RefugeesPage = (function () {
    function RefugeesPage(navCtrl, navParams, refugeesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.refugeesService = refugeesService;
    }
    RefugeesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.refugeesService.GetAllRefugees().subscribe(function (resp) { console.log(resp); _this.refugees = resp; _this.filtredRefugees = resp; });
    };
    RefugeesPage.prototype.getItems = function (event) {
        this.filtredRefugees = this.refugees.filter(function (x) { return x.firstname.toUpperCase().startsWith(event.target.value.toUpperCase()); });
    };
    RefugeesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RefugeesPage');
    };
    RefugeesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-refugees',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\refugees\refugees.html"*/'<!--\n\n  Generated template for the RefugeesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-buttons>\n\n          <button ion-button menuToggle style="color:white">\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n    <ion-title>Refugees List</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-card padding *ngFor="let r of filtredRefugees">\n\n        <ion-card-header >\n\n          <h2>{{r.firstname}} {{r.lastName}}</h2>\n\n        </ion-card-header>\n\n\n\n        <ion-card-content>\n\n          <p>Gender: {{r.sex }} <br>\n\n              Date of birth: {{r.dateOfBirth}}\n\n          </p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\refugees\refugees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__services_refugees_service__["a" /* RefugeesService */]])
    ], RefugeesPage);
    return RefugeesPage;
}());

//# sourceMappingURL=refugees.js.map

/***/ }),

/***/ 191:
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
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/course-group/add-course/add-course.module": [
		725,
		11
	],
	"../pages/course-group/course/course.module": [
		727,
		10
	],
	"../pages/course-group/courses/courses.module": [
		728,
		9
	],
	"../pages/home/home.module": [
		726,
		8
	],
	"../pages/job-offer-page-group/job-offer-add/job-offer-add.module": [
		730,
		7
	],
	"../pages/job-offer-page-group/job-offer/job-offer.module": [
		732,
		6
	],
	"../pages/job-offer-page-group/job-offers/job-offers.module": [
		731,
		5
	],
	"../pages/job-offer-page-group/refugee-list-job-offers/refugee-list-job-offers.module": [
		733,
		4
	],
	"../pages/login/login.module": [
		729,
		3
	],
	"../pages/refugees/refugees.module": [
		735,
		2
	],
	"../pages/tabs/tabs.module": [
		734,
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
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__java_urls__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Utils_UserMapper__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { Object } from 'core-js/library/web/timers';
var AuthService = (function () {
    function AuthService(http, userService, fb) {
        this.http = http;
        this.userService = userService;
        this.fb = fb;
        this.userLogged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.user = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.lg = false;
        this.token = "";
    }
    AuthService.prototype.ngOnDestroy = function () {
        this.subscr.unsubscribe();
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.BasicAuth = function (login, psd) {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__java_urls__["a" /* LOGIN_URL */], {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Authorization', "Basic " + btoa(login + ':' + psd)),
            observe: 'response',
            responseType: 'text'
        })
            .subscribe(function (data) {
            console.log(data);
            var barear = data.headers.get('Authorization');
            localStorage.setItem('token', barear);
            localStorage.setItem('cmode', 'Basic');
            var paylod = __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"].prototype.decodeToken(barear);
            localStorage.setItem('role', paylod.role);
            _this.userLogged.next(true);
            _this.userService.getMe().subscribe(function (u) {
                var temp = JSON.stringify(u);
                var myuser = Object(__WEBPACK_IMPORTED_MODULE_7__Utils_UserMapper__["a" /* UserMapper */])(temp);
                _this.user.next(myuser);
                _this.lg = true;
            });
        });
    };
    AuthService.prototype.FaceBookAuth = function () {
        var _this = this;
        this.fb.login(['email,public_profile,user_photos,user_birthday'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.lg = true;
                _this.token = res.authResponse.accessToken;
            }
            else {
                _this.lg = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    AuthService.prototype.GoogleAuth = function () {
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.lg;
    };
    AuthService.prototype.LogOut = function () {
        this.user.next(null);
        this.userLogged.next(false);
        localStorage.clear();
        this.lg = false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__java_urls__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getMe = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__java_urls__["b" /* USERS_URL */] + '/me');
    };
    UserService.prototype.getUsers = function () {
        this.http.get(__WEBPACK_IMPORTED_MODULE_1__java_urls__["b" /* USERS_URL */], { responseType: 'text' }).subscribe(function (data) {
            console.log(JSON.parse(data));
        });
    };
    UserService.prototype.getUser = function (id) {
        this.http.get(__WEBPACK_IMPORTED_MODULE_1__java_urls__["b" /* USERS_URL */] + '/' + id, { responseType: 'text' }).subscribe(function (data) {
            console.log(JSON.parse(data));
        });
    };
    UserService.prototype.postUser = function (str) {
        console.log("start user post");
        var tmp = { "Volunteer": { "disable": false, "email": "mohamad.khreibi@esprit.tn", "firstName": "test", "lastName": "test", "password": "123456" } };
        console.log(JSON.parse(str));
        this.http.post(__WEBPACK_IMPORTED_MODULE_1__java_urls__["b" /* USERS_URL */], JSON.parse(str)).subscribe(function (e) { return console.log("++++"); }, function (err) { return console.log(err); });
        console.log("user post end");
    };
    UserService.prototype.putUser = function (user) {
        console.log(JSON.parse(user));
        this.http.put(__WEBPACK_IMPORTED_MODULE_1__java_urls__["b" /* USERS_URL */], JSON.parse(user), { responseType: 'text' }).subscribe(function (data) { return console.log(data); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefugeesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RefugeesService = (function () {
    function RefugeesService(http) {
        this.http = http;
        // token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6Mywicm9sZSI6IkNhbXBDaGVmIn0.W8_n4zNk3-7wGttYWkSreT6wuLtkemuKJ3-Pq9_vZJhSjQfa2NLaPCtGFZRk0LbrBKaar3k4ApTS_jdwkUcH5Q';
        this.REFUGEES_URL = "http://localhost:18080/refugeesCamp-web/api/Refugees";
    }
    RefugeesService.prototype.GetAllRefugees = function () {
        return this.http.get(this.REFUGEES_URL);
    };
    RefugeesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], RefugeesService);
    return RefugeesService;
}());

//# sourceMappingURL=refugees.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(393);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_snazzy_info_window__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_job_offer_page_group_job_offers_job_offers__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_joboffer_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_job_offer_page_group_job_offer_job_offer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_job_offer_page_group_job_offer_add_job_offer_add__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_job_offer_page_group_refugee_list_job_offers_refugee_list_job_offers__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_refugees_refugees__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_refugees_service__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_course_group_course_course__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_course_group_courses_courses__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_course_group_add_course_add_course__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_course_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_auth_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__security_jwt_interceptor__ = __webpack_require__(724);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_job_offer_page_group_job_offers_job_offers__["a" /* JobOffersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_job_offer_page_group_job_offer_job_offer__["a" /* JobOfferPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_job_offer_page_group_job_offer_add_job_offer_add__["a" /* JobOfferAddPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_job_offer_page_group_refugee_list_job_offers_refugee_list_job_offers__["a" /* RefugeeListJobOffersPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_refugees_refugees__["a" /* RefugeesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_course_group_course_course__["a" /* CoursePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_course_group_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_course_group_add_course_add_course__["a" /* AddCoursePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/course-group/add-course/add-course.module#AddCoursePageModule', name: 'AddCoursePage', segment: 'add-course', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/course-group/course/course.module#CoursePageModule', name: 'CoursePage', segment: 'course', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/course-group/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/job-offer-add/job-offer-add.module#JobOfferAddPageModule', name: 'JobOfferAddPage', segment: 'job-offer-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/job-offers/job-offers.module#JobOffersPageModule', name: 'JobOffersPage', segment: 'job-offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/job-offer/job-offer.module#JobOfferPageModule', name: 'JobOfferPage', segment: 'job-offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/refugee-list-job-offers/refugee-list-job-offers.module#RefugeeListJobOffersPageModule', name: 'RefugeeListJobOffersPage', segment: 'refugee-list-job-offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/refugees/refugees.module#RefugeesPageModule', name: 'RefugeesPage', segment: 'refugees', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAHcVsCeJyyQ7gDW8gaFyquAkoxQNN6dZA'
                }),
                __WEBPACK_IMPORTED_MODULE_11__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["c" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_job_offer_page_group_job_offers_job_offers__["a" /* JobOffersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_job_offer_page_group_job_offer_job_offer__["a" /* JobOfferPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_job_offer_page_group_job_offer_add_job_offer_add__["a" /* JobOfferAddPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_job_offer_page_group_refugee_list_job_offers_refugee_list_job_offers__["a" /* RefugeeListJobOffersPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_refugees_refugees__["a" /* RefugeesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_course_group_course_course__["a" /* CoursePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_course_group_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_course_group_add_course_add_course__["a" /* AddCoursePage */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_28__security_jwt_interceptor__["a" /* jwtInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__services_joboffer_service__["a" /* JobofferService */],
                __WEBPACK_IMPORTED_MODULE_21__services_refugees_service__["a" /* RefugeesService */],
                __WEBPACK_IMPORTED_MODULE_25__services_course_service__["a" /* CourseService */],
                __WEBPACK_IMPORTED_MODULE_27__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_26__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Course; });
var Course = (function () {
    function Course(name, description, startdate, enddate, id
        // public userId?:number
    ) {
        this.name = name;
        this.description = description;
        this.startdate = startdate;
        this.enddate = enddate;
        this.id = id;
    }
    return Course;
}());

//# sourceMappingURL=course.js.map

/***/ }),

/***/ 692:
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

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UserMapper;
/* unused harmony export userWrapper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_User__ = __webpack_require__(698);

function UserMapper(jsonUser) {
    jsonUser = jsonUser.substr(1, jsonUser.length - 2);
    var type = jsonUser.substr(0, jsonUser.indexOf(':'));
    var user = UserFactory(type);
    jsonUser = jsonUser.substr(jsonUser.indexOf(':') + 1);
    var userImg = JSON.parse(jsonUser);
    user = JSON.parse(jsonUser);
    return user;
}
function setProperty(obj, key, value) {
    obj[key] = value;
}
function UserFactory(typ) {
    switch (typ) {
        case "Admin": return new __WEBPACK_IMPORTED_MODULE_0__entities_User__["a" /* Admin */]();
        case "CampChef": return new __WEBPACK_IMPORTED_MODULE_0__entities_User__["b" /* CampChef */]();
        case "DistrictChef": return new __WEBPACK_IMPORTED_MODULE_0__entities_User__["c" /* DistrictChef */]();
        case "Volunteer": return new __WEBPACK_IMPORTED_MODULE_0__entities_User__["d" /* Volunteer */]();
        default: return null;
    }
}
function userWrapper(typ, json) {
    var jsonStr = JSON.stringify(json);
    return "{\"" + typ + "\":" + jsonStr + "}";
}
//# sourceMappingURL=UserMapper.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Task */
/* unused harmony export Topic */
/* unused harmony export Comment */
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Admin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DistrictChef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CampChef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Volunteer; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Task = (function () {
    function Task() {
    }
    return Task;
}());

var Topic = (function () {
    function Topic() {
    }
    return Topic;
}());

var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

var User = (function () {
    function User() {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.disable = false;
        this.facebookId = "";
        this.birthDay = null;
        this.googleId = "";
        this.tasks = [];
        this.comments = [];
        this.topics = [];
    }
    User.prototype.setLastName = function (str) {
        this.lastName = str;
    };
    User.prototype.setFirstName = function (str) {
        this.firstName = str;
    };
    User.prototype.setId = function (i) {
        this.id = i;
    };
    User.prototype.setEmail = function (str) {
        this.email = str;
    };
    User.prototype.setFacebookId = function (str) {
        this.facebookId = str;
    };
    User.prototype.setPassword = function (str) {
        this.password = str;
    };
    User.prototype.setDisable = function (o) {
        this.disable = o;
    };
    User.prototype.setGoogleId = function (str) {
        this.googleId = str;
    };
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.prototype.setBirthday = function (d) {
        this.birthDay = d;
    };
    User.prototype.setTasks = function (t) {
        this.tasks = t;
    };
    User.prototype.setComments = function (c) {
        this.comments = c;
    };
    User.prototype.setTopics = function (t) {
        this.topics = t;
    };
    return User;
}());

var Admin = (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(User));

var DistrictChef = (function (_super) {
    __extends(DistrictChef, _super);
    function DistrictChef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DistrictChef;
}(User));

var CampChef = (function (_super) {
    __extends(CampChef, _super);
    function CampChef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CampChef;
}(User));

var Volunteer = (function (_super) {
    __extends(Volunteer, _super);
    function Volunteer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Volunteer;
}(User));

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_refugees_refugees__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_job_offer_page_group_job_offers_job_offers__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_course_group_course_course__ = __webpack_require__(88);
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
        this.loginPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.joboffersPage = __WEBPACK_IMPORTED_MODULE_7__pages_job_offer_page_group_job_offers_job_offers__["a" /* JobOffersPage */];
        this.refugeesPage = __WEBPACK_IMPORTED_MODULE_0__pages_refugees_refugees__["a" /* RefugeesPage */];
        this.coursesPage = __WEBPACK_IMPORTED_MODULE_8__pages_course_group_course_course__["a" /* CoursePage */];
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\app\app.html"*/'<ion-menu [content]="nav">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Main menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item (click)="onLoad(tabsPage)">\n\n        <ion-icon name="home" item-left></ion-icon>\n\n        Home\n\n      </button>\n\n      <button ion-item (click)="onLoad(joboffersPage)">\n\n        <ion-icon name="briefcase" item-left></ion-icon>\n\n        Job offers\n\n      </button>\n\n      <button ion-item (click)="onLoad(refugeesPage)">\n\n        <ion-icon name="briefcase" item-left></ion-icon>\n\n        Refugees\n\n      </button>\n\n      <button ion-item (click)="onLoad(coursesPage)">\n\n        <ion-icon name="briefcase" item-left></ion-icon>\n\n        Courses\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <page-tabs></page-tabs>\n\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav [root]="loginPage" #nav></ion-nav>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobofferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(46);
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
        this.jobOfferSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.jobOfferAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.jobOffers = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.jobOffersDetailList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.etat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.bestCands = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], JobofferService);
    return JobofferService;
}());

//# sourceMappingURL=joboffer.service.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_java_urls__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var jwtInterceptor = (function () {
    function jwtInterceptor() {
    }
    jwtInterceptor.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    jwtInterceptor.prototype.intercept = function (request, next) {
        console.log('intercept');
        if (request.url != __WEBPACK_IMPORTED_MODULE_1__services_java_urls__["a" /* LOGIN_URL */] && this.getToken() != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.getToken()
                }
            });
        }
        return next.handle(request);
    };
    jwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], jwtInterceptor);
    return jwtInterceptor;
}());

//# sourceMappingURL=jwt.interceptor.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_course_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_course_add_course__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__courses_courses__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {CoursesPage} from "../courses/courses";
// import {CoursePage} from "../course/course";


/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursePage = (function () {
    function CoursePage(cs, modalCtrl, navParams) {
        this.cs = cs;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
    }
    ////////////
    CoursePage.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getAll().subscribe(function (courses) {
            _this.courses = courses;
        });
        if (this.cs.courseAdd) {
            this.cs.courseAdd.subscribe(function (c) {
                return _this.courses.splice(0, 0, c);
            });
        }
    };
    //////////
    CoursePage.prototype.onViewC = function (c) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__courses_courses__["a" /* CoursesPage */], c);
        this.cs.courseS.emit(c);
        modal.present();
    };
    CoursePage.prototype.onAddC = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__add_course_add_course__["a" /* AddCoursePage */]);
        modal.present();
    };
    /////
    CoursePage.prototype.onDeleteC = function (c) {
        this.cs.delete(c.id).subscribe();
        this.courses.splice(this.courses.indexOf(c), 1);
    };
    CoursePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CoursePage');
    };
    CoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-course',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\course-group\course\course.html"*/'<!--\n\n  Generated template for the CoursePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button menuToggle style="color:white">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>course</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n  <button class="mLeft" (click)="onAddC()" ion-button small outline item-end icon-left>\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Add Course\n\n  </button>\n\n\n\n\n\n  <ion-card padding *ngFor="let c of courses">\n\n    <ion-card-header >\n\n      {{c.name}}\n\n    </ion-card-header>\n\n\n\n    <ion-row>\n\n      <ion-col text-right>\n\n\n\n        <button\n\n          ion-button\n\n          color="default"\n\n          outline\n\n          round\n\n          small (click)="onViewC(c)">\n\n          Details</button>\n\n\n\n        <button\n\n          ion-button\n\n          outline\n\n          round\n\n          small\n\n          color="danger" (click)="onDeleteC(c)">Delete</button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\course-group\course\course.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_course_service__["a" /* CourseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoursePage);
    return CoursePage;
}());

//# sourceMappingURL=course.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(332);
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
    function LoginPage(authService, nav, viewCtrl, platform, http, fb) {
        this.authService = authService;
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.http = http;
        this.fb = fb;
        this.submitted = false;
        this.platform = platform;
        platform.ready().then(function () {
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.subscription = this.authService.userLogged.subscribe(function (isConnected) {
            _this.connected = isConnected;
        });
        this.userSub = this.authService.user.subscribe(function (u) {
            _this.user = u;
            console.log("jasgzdfsdf");
        });
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.subscription.unsubscribe();
        this.userSub.unsubscribe();
    };
    LoginPage.prototype.onSubmit = function () {
        this.submitted = true;
        this.authService.BasicAuth(this.login, this.password);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.onFacebook = function () {
        try {
            if (this.platform.is('cordova')) {
                return this.fb.login(['email,public_profile,user_photos,user_birthday']).then(function (success) {
                    console.log("facebook login success", success);
                    return success;
                }, function (error) {
                    console.log("facebook error login", error);
                    return error;
                });
            }
            else {
                return Promise.reject("Please run me on a device");
            }
        }
        catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };
    LoginPage.prototype.onGoogle = function () {
        this.authService.GoogleAuth();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>Refugees Camp</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content text-center padding>\n\n  <ion-list>\n\n  <img block class="mTopAndWidth" text-center src="assets/imgs/logoRC.png"/>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input [(ngModel)]="login" type="text" value=""></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input [(ngModel)]="password"  type="password" value=""></ion-input>\n\n    </ion-item>\n\n\n\n\n\n\n\n  </ion-list>\n\n  <div padding text-center>\n\n    <button ion-button outline primary  large  (click)="onSubmit()">Sign In</button>\n\n  </div>\n\n\n\n  <div padding text-center>\n\n    <ion-icon name="logo-facebook" (click)="onFacebook()"></ion-icon>\n\n  </div>\n\n\n\n  <div padding text-center>\n\n    <button ion-button outline primary  large  (click)="onGoogle()">Google</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_offer_page_group_job_offers_job_offers__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__course_group_course_course__ = __webpack_require__(88);
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
        this.coursesPage = __WEBPACK_IMPORTED_MODULE_4__course_group_course_course__["a" /* CoursePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\tabs\tabs.html"*/'\n\n<ion-tabs>\n\n\n\n  <ion-tab [root]="homePage" tabTitle="Home" tabIcon="book"></ion-tab>\n\n  <!-- add this here to navigate [root]="joboffersPage"-->\n\n  <ion-tab  tabTitle="Events" tabIcon="briefcase"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\tabs\tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_joboffer_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_offer_job_offer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_offer_add_job_offer_add__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__refugee_list_job_offers_refugee_list_job_offers__ = __webpack_require__(177);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-job-offers',template:/*ion-inline-start:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\job-offer-page-group\job-offers\job-offers.html"*/'<!--\n\n  Generated template for the JobOffersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button menuToggle style="color:white">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title text-center>Job Offers</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-card class="cardRC">\n\n    <img src="assets/imgs/space-desk-workspace-coworking.jpg"/>\n\n    <div style="position: absolute" class="card-title">Job Offers</div>\n\n\n\n  </ion-card>\n\n<!--pass JO here-->\n\n  <button class="mLeft" (click)="onAddJO()" ion-button small outline item-end icon-left>\n\n    <ion-icon name="add-circle"></ion-icon>\n\n    Add new job offer\n\n  </button>\n\n\n\n\n\n  <ion-card padding *ngFor="let j of jobOffers">\n\n    <ion-card-header >\n\n      {{j.title}}\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <p>{{j.description }}</p>\n\n    </ion-card-content>\n\n\n\n\n\n\n\n    <ion-row>\n\n      <ion-col text-right>\n\n\n\n        <button\n\n          ion-button\n\n          color="default"\n\n          outline\n\n          round\n\n          small (click)="onViewJO(j)">\n\n          Details</button>\n\n        <button\n\n          ion-button\n\n          color="secondary"\n\n          outline\n\n          round\n\n          small (click)="onBestCandidates(j)">\n\n          Best candidates</button>\n\n        <button\n\n          ion-button\n\n          outline\n\n          round\n\n          small\n\n          color="danger" (click)="onDeleteJO(j)">Delete</button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\azgar\Desktop\Refugees-camp-Ionic\src\pages\job-offer-page-group\job-offers\job-offers.html"*/,
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

/***/ })

},[388]);
//# sourceMappingURL=main.js.map