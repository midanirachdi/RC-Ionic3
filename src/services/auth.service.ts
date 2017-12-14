import { Injectable,OnDestroy } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Facebook } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';
import { JwtHelper } from 'angular2-jwt';
import {LOGIN_URL} from './java.urls';
import{UserService } from './user.service';
import {User,Admin,CampChef,DistrictChef,Volunteer} from '../entities/User'
import {UserMapper} from '../Utils/UserMapper';

//import { Object } from 'core-js/library/web/timers';




@Injectable()
export class AuthService implements OnDestroy {

  ngOnDestroy(){
    this.subscr.unsubscribe();
  }

  userLogged:BehaviorSubject <boolean>=new BehaviorSubject(false);
  user:BehaviorSubject<User>=new BehaviorSubject<User>(null);
  subscr:Subscription;
  lg:boolean=false;
  token:string="";
  constructor(public http: HttpClient,private userService:UserService,private fb: Facebook,public storage:Storage) {
  

  }

  public getToken(): string {
    let tkn:string="";
    this.storage.get('token').then(e=>tkn=e);
    return tkn;
  }




  public BasicAuth(login:string,psd:string){
    this.http.get(LOGIN_URL,{
      headers: new HttpHeaders().set('Authorization',"Basic "+btoa(login+':'+psd)),
      observe: 'response',
      responseType:'text'
    }
    )
    .subscribe(
      (data) => {
        console.log(data)
        let barear=data.headers.get('Authorization');
        this.storage.set('token',barear);
        this.storage.set('cmode','Basic')
        let paylod:{
            id:number;
            role:string;}=JwtHelper.prototype.decodeToken(barear);
            this.storage.set('role',paylod.role)
            this.userLogged.next(true);

            this.userService.getMe().subscribe((u:User)=>{
              let temp=JSON.stringify(u);
              let myuser:User=UserMapper(temp);
              this.user.next(myuser);
              this.lg=true;
            });
            

        }
    );
  }


  public FaceBookAuth():void{

    this.fb.login(['email,public_profile,user_photos,user_birthday'])
    .then(res => {
      if(res.status === "connected") {
        this.lg = true;
        this.token=res.authResponse.userID;
        console.log(this.token);
       /* this.http.get(LOGIN_URL,{
          headers: new HttpHeaders().set('Authorization',"ftoken "+this.token),
          observe: 'response',
          responseType:'text'
        }).subscribe();*/
      } else {
        this.lg = false;
      }
    })
    .catch(e => console.log('Error logging into Facebook', e));

  }


  public GoogleAuth():void{

  }


  public isAuthenticated():boolean{
   return this.lg;
  }

  public LogOut():void{
    this.user.next(null);
    this.userLogged.next(false);
    this.storage.clear().then();
    this.lg=false;
  }

}
