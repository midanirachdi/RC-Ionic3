import {Component, OnInit} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {JobofferService} from "../../../services/joboffer.service";




/**
 * Generated class for the JobOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-offer',
  templateUrl: 'job-offer.html',
})
export class JobOfferPage implements OnInit{
  //joboffer:Joboffer=null;
  etat=false;
  title:string;
  description:string;
  begindate:string;
  enddate:string;
  contactnumber:number;
  fieldOfWork:string;
  salaryEstimate:number;
  companyName:string;
  companyAdress:string;
  contactEmail:string;
  contactName:string;

  lat:number= 34.431140;
  lng:number= 8.775656;

  MapTypeRc='satellite';



  ngOnInit() {

  }

  constructor(private jobOfferService: JobofferService,
              private viewCtrl: ViewController,
              public navParams: NavParams) {
  }

  performForwardGeocoding(val)
  {
    this.jobOfferService.getGEO(val).subscribe(
      (resp)=> {
        this.lat = resp.results[0].geometry.location.lat;
        this.lng = resp.results[0].geometry.location.lng;
      }
    );
    this.etat=!this.etat;

  }

  ionViewDidLoad() {
    this.title=this.navParams.get('title');
    this.description=this.navParams.get('description');
    this.begindate=this.navParams.get('begindate');
    this.enddate=this.navParams.get('enddate');
    this.contactnumber=this.navParams.get('contactnumber');
    this.fieldOfWork=this.navParams.get('fieldOfWork');
    this.salaryEstimate=this.navParams.get('salaryEstimate');
    this.companyName=this.navParams.get('companyName');
    this.companyAdress=this.navParams.get('companyAdress');
    this.contactEmail=this.navParams.get('contactEmail');
    this.contactName=this.navParams.get('contactName');


  }
  onClose(remove=false) {
    this.viewCtrl.dismiss(remove);
  }



}
