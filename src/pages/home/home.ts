import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../../services/auth.service';
import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {User} from "../../entities/User";



/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  user:User=null;
  constructor(public navCtrl: NavController,public  navParams:NavParams,public as:AuthService)
  {

  }
  ionViewDidLoad(){
    this.as.user.subscribe(e=>{
      this.user=e;
      console.log(this.user);
    })

  }
}
