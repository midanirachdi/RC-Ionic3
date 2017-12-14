import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../entities/User";
import {UserService} from '../../services/user.service';
import {userWrapper} from '../../Utils/UserMapper';
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private registerForm : FormGroup;
  user:any={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder ,private us:UserService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      psd: ['', Validators.required],
    });

  }



  ionViewDidLoad() {

   }


   submitForm(){
      this.user.firstName=this.registerForm.value.firstName;
      this.user.lastName=this.registerForm.value.lastName;
      this.user.email=this.registerForm.value.email;
      this.user.password=this.registerForm.value.psd;
      console.log(userWrapper("Volunteer",this.user))
      this.us.postUser(userWrapper("Volunteer",this.user)).subscribe(e=>{});
      this.navCtrl.setRoot(LoginPage);
   }
}
