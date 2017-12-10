import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Joboffer} from "../../../entities/joboffer";
import {JobofferService} from "../../../services/joboffer.service";
import {JobOfferPage} from "../job-offer/job-offer";
import {JobOfferAddPage} from "../job-offer-add/job-offer-add";
import {Refugee} from "../../../entities/refugee";
import {RefugeeListJobOffersPage} from "../refugee-list-job-offers/refugee-list-job-offers";

/**
 * Generated class for the JobOffersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-job-offers',
  templateUrl: 'job-offers.html',
})
export class JobOffersPage implements OnInit {
  jobOffers: Joboffer[];
  refugees: Refugee[];

  constructor(public navCtrl: NavController,
              private jobOfferService: JobofferService,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private loadingCtrl:LoadingController) {
  }

  ngOnInit() {
    this.jobOfferService.getAllJobOffers().subscribe(
      (joboffers: Joboffer[]) => {
        this.jobOffers = joboffers;

      }
    );
    if(this.jobOfferService.jobOfferAdded){
    this.jobOfferService.jobOfferAdded.subscribe(
      (jo: Joboffer) =>
        this.jobOffers.splice(0, 0, jo)
    );
    }
  }

  onViewJO(j: Joboffer) {
    const modal = this.modalCtrl.create(JobOfferPage, j);
    this.jobOfferService.jobOfferSelected.emit(j);
    modal.present();
  }

  onAddJO() {
    const modal = this.modalCtrl.create(JobOfferAddPage);
    modal.present();

  }

  onDeleteJO(j: Joboffer) {
    this.jobOfferService.deleteJobOffer(j.id).subscribe();
    this.jobOffers.splice(this.jobOffers.indexOf(j), 1);
  }

  onBestCandidates(j: Joboffer) {
    let loading = this.loadingCtrl.create({
      content: 'Retreiving candidates list & emailing them ...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);

    this.jobOfferService.getBestCandidatesAndEmailThem(j.id).subscribe(
      (refugees: Refugee[]) => {
        this.refugees = refugees;
        const modal = this.modalCtrl.create(RefugeeListJobOffersPage,{refugees:this.refugees});
        modal.present();
      }
    );

  }

  ionViewDidLoad() {

  }


}
