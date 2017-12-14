import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {Subscription} from 'rxjs/Subscription';
import { Facebook } from '@ionic-native/facebook';
import {Http} from "@angular/http";
import {HomePage} from "../home/home";
import {TabsPage} from "../tabs/tabs";
import {RegisterPage} from "../register/register";

import {JobOffersPage} from "../job-offer-page-group/job-offers/job-offers";
import {User,Admin,CampChef,DistrictChef,Volunteer} from '../../entities/User'
import {AuthService} from '../../services/auth.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{


  login:string;
  password:string;
  submitted = false;
  subscription:Subscription;
  connected:boolean;
  userSub:Subscription;
  user:User;

  constructor(private authService:AuthService,public nav: NavController, public viewCtrl:ViewController,public platform: Platform, public http: Http,private fb: Facebook) {
    this.platform = platform;
    platform.ready().then(() => {

    });
  }

  ionViewWillEnter() {
    this.subscription=this.authService.userLogged.subscribe(isConnected=>{
      this.connected=isConnected;
      }
    );

    this.userSub=this.authService.user.subscribe((u:User)=>{this.user=u;
      console.log("jasgzdfsdf")
    });

  }


  ionViewDidLeave(){
    this.subscription.unsubscribe();
    this.userSub.unsubscribe();
  }

  onSubmit() { this.submitted = true;
    this.authService.BasicAuth(this.login,this.password);
    this.nav.setRoot(TabsPage);
  }

onFacebook(){
  try {
    if (this.platform.is('cordova')) {
        return this.fb.login(['email,public_profile,user_photos,user_birthday']).then(
            (success) => {
                console.log("facebook login success", success);
                return success;
            },
            (error) => {
                console.log("facebook error login", error)
                return error;
            }
        )
    }
    else {
        return Promise.reject("Please run me on a device");
    }
} catch (error) {
    console.log(error);
    return Promise.reject(error);
}
}





onGoogle(){
  this.authService.GoogleAuth();
  this.nav.setRoot(TabsPage);
}

register(){
  this.nav.setRoot(RegisterPage);
}




}
