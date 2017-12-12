import { RefugeesService } from './../../services/refugees.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Refugee } from '../../entities/refugee';

/**
 * Generated class for the RefugeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refugees',
  templateUrl: 'refugees.html',
})
export class RefugeesPage implements OnInit{
  filtredRefugees: Refugee[];
  refugees: Refugee[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private refugeesService : RefugeesService) {
  }

  ngOnInit(): void {
    this.refugeesService.GetAllRefugees().subscribe((resp :Refugee[]) => {console.log(resp); this.refugees = resp; this.filtredRefugees = resp; } );
  }

  getItems(event: any){
    this.filtredRefugees = this.refugees.filter(x => x.firstname.toUpperCase().startsWith(event.target.value.toUpperCase()));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RefugeesPage');
  }

}
