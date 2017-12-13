import { EvenementService } from './../../services/evenement.service';
import { Evenement } from './../../entities/Evenement';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the EvenementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evenements',
  templateUrl: 'evenements.html',
})
export class EvenementsPage {

  evenements: Evenement[];

  constructor(public navCtrl: NavController,
    private evenementService: EvenementService,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.evenementService.GetAllEvents().subscribe(
      (evenements: Evenement[]) => {
        this.evenements = evenements;

      }
    );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EvenementsPage');
  }

}
