import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Joboffer} from "../../../entities/joboffer";
import {DatePipe} from "@angular/common";
import {JobofferService} from "../../../services/joboffer.service";
import {JobOffersPage} from "../job-offers/job-offers";

/**
 * Generated class for the JobOfferAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-offer-add',
  templateUrl: 'job-offer-add.html',
  providers:[DatePipe]
})
export class JobOfferAddPage {
  private jobofferForm : FormGroup;
  constructor( private formBuilder: FormBuilder ,
               public navCtrl: NavController,
               public navParams: NavParams,
               private datePipe: DatePipe,
               private jobofferService:JobofferService,
               public viewCtrl:ViewController
  ) {
    this.jobofferForm = this.formBuilder.group({
      title: ['', Validators.required],
      contactN: ['', Validators.required],
      companyN: ['', Validators.required],
      companyA: ['', Validators.required],
      contactE: ['', Validators.required],
      desc: ['', Validators.required],
      bd: ['', Validators.required],
      ed: ['', Validators.required],
      contactNumber: ['', Validators.required],
      fow: ['', Validators.required],
      salaryE: ['', Validators.required]
    });
  }


  ionViewDidLoad() {
   // console.log('ionViewDidLoad JobOfferAddPage');
  }
  submitForm(){
    console.log(this.jobofferForm.value.desc);
    const newJobOffer = new Joboffer(
      this.jobofferForm.value.desc,
      this.datePipe.transform(this.jobofferForm.value.bd, 'yyyy-MM-dd'),
      this.datePipe.transform(this.jobofferForm.value.ed, 'yyyy-MM-dd'),
      this.jobofferForm.value.contactNumber,
      this.jobofferForm.value.fow,
      this.jobofferForm.value.salaryE,
      this.jobofferForm.value.companyN,
      this.jobofferForm.value.companyA,
      this.jobofferForm.value.contactE,
      this.jobofferForm.value.contactN,
      this.jobofferForm.value.title);


      this.jobofferService.addJobOffer(newJobOffer).subscribe(
        (jobOfferAdded:Joboffer)=>{

        }
      );
    this.jobofferService.jobOfferAdded.emit(newJobOffer);
    this.navCtrl.popTo(JobOffersPage);
    //this.viewCtrl.dismiss(false);


  }
  onClose(remove=false) {
    this.viewCtrl.dismiss(remove);

  }
}
