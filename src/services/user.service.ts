import { Injectable } from '@angular/core';
import {USERS_URL} from './java.urls';
import {User,Admin,CampChef,DistrictChef,Volunteer} from '../entities/User'
import { HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import { Body } from '@angular/http/src/body';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) { }
  

  getMe(){
  
   return  this.http.get(USERS_URL+'/me');
  
  }

  getUsers(){
    this.http.get(USERS_URL,{responseType:'text'}).subscribe(data => {
      console.log(JSON.parse(data));
     });
  }

  getUser(id){
    this.http.get(USERS_URL+'/'+id,{responseType:'text'}).subscribe(data => {
      console.log(JSON.parse(data));
    });
}


  postUser(str:string){

   return this.http.post(USERS_URL,JSON.parse(str),{responseType:'text'});

  }

  putUser(user:string){
    console.log(JSON.parse(user))
    this.http.put(USERS_URL,JSON.parse(user),{responseType:'text'}).subscribe((data:string)=>console.log(data));
  }



}
