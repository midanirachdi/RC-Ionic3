webpackJsonp([12],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(71);
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
        this.courseS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.courseAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.etat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.courses = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CourseService);
    return CourseService;
}());

//# sourceMappingURL=course.service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_course_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_course__ = __webpack_require__(406);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-course',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/course-group/add-course/add-course.html"*/'<!--\n  Generated template for the AddCoursePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>AddCourse</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="courseForm" (ngSubmit)="submitForm()">\n\n    <ion-item>\n      <ion-label floating>Name</ion-label >\n      <ion-input required type="text" formControlName="nam"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Description</ion-label >\n      <ion-textarea required formControlName="descriptio"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Startdate</ion-label >\n      <ion-datetime required formControlName="startdat" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" >\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Enddate</ion-label >\n      <ion-datetime required formControlName="enddat" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" >\n      </ion-datetime>\n    </ion-item>\n\n    <div text-center>\n      <button ion-button  type="submit" [disabled]="!courseForm.valid">Add</button>\n      <button ion-button color="danger" (click)="onClose()">Exit</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/course-group/add-course/add-course.html"*/,
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

/***/ 170:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-courses',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/course-group/courses/courses.html"*/'<!--\n  Generated template for the CoursesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n\n  <ion-card padding text-left>\n    <ion-card-content>\n\n      <p><b>Description : </b> {{description}}</p>\n      <hr>\n      <p><b>From : </b>{{startdate}} </p>\n      <hr>\n      <p><b>To : </b>{{enddate}}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <button small ion-button color="danger" (click)="onClose()">Exit</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/course-group/courses/courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoursesPage);
    return CoursesPage;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 171:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button menuToggle style="color:white">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Home page</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p> home page content</p>\n</ion-content>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOfferAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_joboffer__ = __webpack_require__(407);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-offer-add',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/job-offer-page-group/job-offer-add/job-offer-add.html"*/'<!--\n  Generated template for the JobOfferAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>jobOfferAdd</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="jobofferForm" (ngSubmit)="submitForm()">\n    <ion-item>\n      <ion-label floating>Title</ion-label >\n      <ion-input required type="text" formControlName="title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Description</ion-label >\n      <ion-textarea required formControlName="desc"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Contact name</ion-label >\n      <ion-input required type="text" formControlName="contactN"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Contact email</ion-label >\n      <ion-input required type="text" formControlName="contactE"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Contact number</ion-label >\n      <ion-input required type="number" formControlName="contactNumber"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Company name</ion-label >\n      <ion-input required type="text" formControlName="companyN"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Company Address</ion-label >\n      <ion-input required type="text" formControlName="companyA"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Begin date</ion-label >\n      <ion-datetime required formControlName="bd" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" >\n      </ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>End date</ion-label >\n      <ion-datetime required formControlName="ed" displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" >\n      </ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Field of work</ion-label >\n      <ion-input required type="text" formControlName="fow"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Salary estimate</ion-label >\n      <ion-input required  type="text" type="number" formControlName="salaryE"></ion-input>\n    </ion-item>\n\n\n    <div text-center class="mTop">\n    <button ion-button  type="submit" [disabled]="!jobofferForm.valid">Submit</button>\n      <button ion-button color="danger" (click)="onClose()">Close</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/job-offer-page-group/job-offer-add/job-offer-add.html"*/,
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

/***/ 173:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-job-offer',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/job-offer-page-group/job-offer/job-offer.html"*/'<!--\n  Generated template for the QuotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n  <ion-card padding text-left>\n    <ion-card-content>\n\n      <p><b>Description : </b> {{description}}</p>\n      <hr>\n      <p><b>From : </b>{{begindate}} </p>\n      <hr>\n      <p><b>To : </b>{{enddate}}</p>\n      <hr>\n      <p><b>Contact name : </b>{{contactName}}</p>\n      <p><b>Contact number : </b>{{contactnumber}}</p>\n      <p><b>Contact email : </b>{{contactEmail}}</p>\n      <hr> <hr>\n      <p><b>Company name : </b>{{companyName}}</p>\n      <p><b>Company address : </b>{{companyAdress}}</p>\n\n\n      <ion-grid class="button-group">\n        <ion-row>\n\n            <button\n              ion-button\n              small\n              outline\n              color="danger"\n              (click)="this.MapTypeRc=\'roadmap\'">Map</button>\n            <button\n              ion-button\n              small\n              outline\n              color="danger"\n              (click)="this.MapTypeRc=\'satellite\'">Satellite</button>\n            <button\n              ion-button\n              small\n              outline\n              color="danger"\n              (click)="performForwardGeocoding(companyAdress)">Show on map</button>\n\n\n        </ion-row>\n      </ion-grid>\n\n\n      <agm-map *ngIf="etat" [latitude]="lat"  [longitude]="lng" [zoom]="16"  [mapTypeId]="MapTypeRc" >\n        <agm-marker [latitude]="lat" [longitude]="lng">\n          <agm-snazzy-info-window  [maxWidth]="200" [closeWhenOthersOpen]="true">\n            <ng-template>\n              <p>{{lat}}</p>\n            </ng-template>\n          </agm-snazzy-info-window>\n        </agm-marker>\n      </agm-map>\n\n      <hr> <hr>\n      <p><b>Salary estimate : </b>{{salaryEstimate}}</p>\n      <p><b>Field of work : </b>{{fieldOfWork}}</p>\n    </ion-card-content>\n\n  </ion-card>\n\n  <button small ion-button color="danger" (click)="onClose()">Close</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/job-offer-page-group/job-offer/job-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_joboffer_service__["a" /* JobofferService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], JobOfferPage);
    return JobOfferPage;
}());

//# sourceMappingURL=job-offer.js.map

/***/ }),

/***/ 174:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-refugee-list-job-offers',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/job-offer-page-group/refugee-list-job-offers/refugee-list-job-offers.html"*/'<!--\n  Generated template for the RefugeeListJobOffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>refugeeListJobOffers</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card padding *ngFor="let r of refugees">\n    <ion-card-header >\n      {{r.firstname}} {{r.lastName}}\n    </ion-card-header>\n\n    <ion-card-content>\n\n    <p><b>Email : </b>{{r.email}}</p>\n    <p><b>Gender: </b>{{r.sex}}</p>\n    <p><b>Date of birth: </b>{{r.dateOfBirth}}</p>\n    <p><b>Nationality: </b>{{r.nationality}}</p>\n    <p><b>French language level : </b>{{r.frenchlanguageLevel}}</p>\n    <p><b>English language level : </b>{{r.englishlanguageLevel}}</p>\n    <p><b>Highest degree : </b>{{r.highestDegree}}</p>\n    <p><b>Phone number : </b>{{r.phoneNumber}}</p>\n    </ion-card-content>\n\n  </ion-card>\n  <div text-center >\n  <button small text-center ion-button color="danger" (click)="onClose()">Close</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/job-offer-page-group/refugee-list-job-offers/refugee-list-job-offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], RefugeeListJobOffersPage);
    return RefugeeListJobOffersPage;
}());

//# sourceMappingURL=refugee-list-job-offers.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefugeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_refugees_service__ = __webpack_require__(328);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-refugees',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/refugees/refugees.html"*/'<!--\n  Generated template for the RefugeesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons>\n          <button ion-button menuToggle style="color:white">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>Refugees List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-card padding *ngFor="let r of filtredRefugees">\n        <ion-card-header >\n          <h2>{{r.firstname}} {{r.lastName}}</h2>\n        </ion-card-header>\n\n        <ion-card-content>\n          <p>Gender: {{r.sex }} <br>\n              Date of birth: {{r.dateOfBirth}}\n          </p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/refugees/refugees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__services_refugees_service__["a" /* RefugeesService */]])
    ], RefugeesPage);
    return RefugeesPage;
}());

//# sourceMappingURL=refugees.js.map

/***/ }),

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/course-group/add-course/add-course.module": [
		717,
		11
	],
	"../pages/course-group/course/course.module": [
		718,
		10
	],
	"../pages/course-group/courses/courses.module": [
		719,
		9
	],
	"../pages/home/home.module": [
		720,
		8
	],
	"../pages/job-offer-page-group/job-offer-add/job-offer-add.module": [
		721,
		7
	],
	"../pages/job-offer-page-group/job-offer/job-offer.module": [
		722,
		6
	],
	"../pages/job-offer-page-group/job-offers/job-offers.module": [
		723,
		5
	],
	"../pages/job-offer-page-group/refugee-list-job-offers/refugee-list-job-offers.module": [
		724,
		4
	],
	"../pages/login/login.module": [
		725,
		3
	],
	"../pages/refugees/refugees.module": [
		727,
		2
	],
	"../pages/tabs/tabs.module": [
		726,
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
webpackAsyncContext.id = 232;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefugeesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(71);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RefugeesService);
    return RefugeesService;
}());

//# sourceMappingURL=refugees.service.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(386);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_snazzy_info_window__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_job_offer_page_group_job_offers_job_offers__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_joboffer_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_job_offer_page_group_job_offer_job_offer__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_job_offer_page_group_job_offer_add_job_offer_add__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_job_offer_page_group_refugee_list_job_offers_refugee_list_job_offers__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_refugees_refugees__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_refugees_service__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_course_group_course_course__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_course_group_courses_courses__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_course_group_add_course_add_course__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_course_service__ = __webpack_require__(121);
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
                __WEBPACK_IMPORTED_MODULE_18__pages_job_offer_page_group_refugee_list_job_offers_refugee_list_job_offers__["a" /* RefugeeListJobOffersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_refugees_refugees__["a" /* RefugeesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_course_group_course_course__["a" /* CoursePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_course_group_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_course_group_add_course_add_course__["a" /* AddCoursePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/course-group/add-course/add-course.module#AddCoursePageModule', name: 'AddCoursePage', segment: 'add-course', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/course-group/course/course.module#CoursePageModule', name: 'CoursePage', segment: 'course', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/course-group/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/job-offer-add/job-offer-add.module#JobOfferAddPageModule', name: 'JobOfferAddPage', segment: 'job-offer-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/job-offer/job-offer.module#JobOfferPageModule', name: 'JobOfferPage', segment: 'job-offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/job-offers/job-offers.module#JobOffersPageModule', name: 'JobOffersPage', segment: 'job-offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/job-offer-page-group/refugee-list-job-offers/refugee-list-job-offers.module#RefugeeListJobOffersPageModule', name: 'RefugeeListJobOffersPage', segment: 'refugee-list-job-offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/refugees/refugees.module#RefugeesPageModule', name: 'RefugeesPage', segment: 'refugees', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_18__pages_job_offer_page_group_refugee_list_job_offers_refugee_list_job_offers__["a" /* RefugeeListJobOffersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_refugees_refugees__["a" /* RefugeesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_course_group_course_course__["a" /* CoursePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_course_group_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_course_group_add_course_add_course__["a" /* AddCoursePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__services_joboffer_service__["a" /* JobofferService */],
                __WEBPACK_IMPORTED_MODULE_20__services_refugees_service__["a" /* RefugeesService */],
                __WEBPACK_IMPORTED_MODULE_24__services_course_service__["a" /* CourseService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 406:
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

/***/ 407:
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

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_refugees_refugees__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_job_offer_page_group_job_offers_job_offers__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_course_group_course_course__ = __webpack_require__(87);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/app/app.html"*/'<ion-menu [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Main menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="onLoad(tabsPage)">\n        <ion-icon name="home" item-left></ion-icon>\n        Home\n      </button>\n      <button ion-item (click)="onLoad(joboffersPage)">\n        <ion-icon name="briefcase" item-left></ion-icon>\n        Job offers\n      </button>\n      <button ion-item (click)="onLoad(refugeesPage)">\n        <ion-icon name="briefcase" item-left></ion-icon>\n        Refugees\n      </button>\n      <button ion-item (click)="onLoad(coursesPage)">\n        <ion-icon name="briefcase" item-left></ion-icon>\n        Courses\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <page-tabs></page-tabs>\n  </ion-footer>\n</ion-menu>\n<ion-nav [root]="loginPage" #nav></ion-nav>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/app/app.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(71);
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

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_course_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_course_add_course__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__courses_courses__ = __webpack_require__(170);
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
            _this.filtreCourses = courses;
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
    CoursePage.prototype.getItems = function (event) {
        this.filtreCourses = this.courses.filter(function (x) { return x.name.toUpperCase().startsWith(event.target.value.toUpperCase()); });
    };
    CoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-course',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/course-group/course/course.html"*/'<!--\n  Generated template for the CoursePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button menuToggle style="color:white">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>course</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n\n  <button class="mLeft" (click)="onAddC()" ion-button small outline item-end icon-left>\n    <ion-icon name="add-circle"></ion-icon>\n    Add Course\n  </button>\n  <!--//////-->\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <!--/////-->\n\n  <ion-card padding *ngFor="let c of filtreCourses">\n    <ion-card-header >\n      {{c.name}}\n    </ion-card-header>\n\n    <ion-row>\n      <ion-col text-right>\n\n        <button\n          ion-button\n          color="default"\n          outline\n          round\n          small (click)="onViewC(c)">\n          Details</button>\n\n        <button\n          ion-button\n\n          round\n          small\n          color="danger" (click)="onDeleteC(c)">  <ion-icon name="trash"></ion-icon>\n          Delete</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/course-group/course/course.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_course_service__["a" /* CourseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CoursePage);
    return CoursePage;
}());

//# sourceMappingURL=course.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobOffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_joboffer_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_offer_job_offer__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_offer_add_job_offer_add__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__refugee_list_job_offers_refugee_list_job_offers__ = __webpack_require__(174);
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
            selector: 'page-job-offers',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/job-offer-page-group/job-offers/job-offers.html"*/'<!--\n  Generated template for the JobOffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button menuToggle style="color:white">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>Job Offers</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-card class="cardRC">\n    <img src="assets/imgs/space-desk-workspace-coworking.jpg"/>\n    <div style="position: absolute" class="card-title">Job Offers</div>\n\n  </ion-card>\n<!--pass JO here-->\n  <button class="mLeft" (click)="onAddJO()" ion-button small outline item-end icon-left>\n    <ion-icon name="add-circle"></ion-icon>\n    Add new job offer\n  </button>\n\n\n  <ion-card padding *ngFor="let j of jobOffers">\n    <ion-card-header >\n      {{j.title}}\n    </ion-card-header>\n\n    <ion-card-content>\n      <p>{{j.description }}</p>\n    </ion-card-content>\n\n\n\n    <ion-row>\n      <ion-col text-right>\n\n        <button\n          ion-button\n          color="default"\n          outline\n          round\n          small (click)="onViewJO(j)">\n          Details</button>\n        <button\n          ion-button\n          color="secondary"\n          outline\n          round\n          small (click)="onBestCandidates(j)">\n          Best candidates</button>\n        <button\n          ion-button\n          outline\n          round\n          small\n          color="danger" (click)="onDeleteJO(j)">Delete</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/job-offer-page-group/job-offers/job-offers.html"*/,
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(90);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Refugees Camp</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center padding>\n  <ion-list>\n  <img block class="mTopAndWidth" text-center src="assets/imgs/logoRC.png"/>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input [(ngModel)]="username" type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input [(ngModel)]="password"  type="password" value=""></ion-input>\n    </ion-item>\n\n\n\n  </ion-list>\n  <div padding text-center>\n    <button ion-button outline primary  large  (click)="login()">Sign In</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_offer_page_group_job_offers_job_offers__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__course_group_course_course__ = __webpack_require__(87);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/tabs/tabs.html"*/'\n<ion-tabs>\n\n  <ion-tab [root]="homePage" tabTitle="Home" tabIcon="book"></ion-tab>\n  <!-- add this here to navigate [root]="joboffersPage"-->\n  <ion-tab  tabTitle="Events" tabIcon="briefcase"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/macboookpro/Refugees-camp-Ionic/src/pages/tabs/tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[381]);
//# sourceMappingURL=main.js.map