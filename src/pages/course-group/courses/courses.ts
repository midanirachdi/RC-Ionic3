import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage implements OnInit{

  etat=false;
  name:string;
  description:string;
  startdate:string;
  enddate:string;

  ngOnInit() {

  }


  constructor(
              private viewCtrl: ViewController,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.name=this.navParams.get('name');
    this.description=this.navParams.get('description');
    this.enddate=this.navParams.get('enddate');
    this.name=this.navParams.get('name');
    this.startdate=this.navParams.get('startdate');

  }

  onClose(remove=false) {
    this.viewCtrl.dismiss(remove);
  }

}
