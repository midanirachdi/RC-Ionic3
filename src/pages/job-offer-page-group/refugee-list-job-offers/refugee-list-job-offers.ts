import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Refugee} from "../../../entities/refugee";

/**
 * Generated class for the RefugeeListJobOffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refugee-list-job-offers',
  templateUrl: 'refugee-list-job-offers.html',
})
export class RefugeeListJobOffersPage {
refugees:Refugee[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    this.refugees=this.navParams.get('refugees');

  }
  onClose(remove=false) {
    this.viewCtrl.dismiss(remove);
  }
}
