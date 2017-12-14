import { Injectable } from '@angular/core';
import {LOGIN_URL} from '../services/java.urls';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@Injectable()
export class jwtInterceptor implements HttpInterceptor{
  tesToken="";
  constructor(private storage:Storage) {
    this.storage.ready(
    ).then(()=>    this.storage.get('token').then(e=>{this.tesToken=e}))

  console.log(this.tesToken);
  }

  public getToken(): string {
    let tkn="";
    
     this.storage.get('token').then(e=>{tkn=e
      console.log("hello start")
    console.log(e)
    console.log("hello end")});
    setTimeout(function(){},1000)

    return tkn;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercept');
    if(request.url!=LOGIN_URL && this.getToken()!=null)
    { request = request.clone({
      setHeaders: {
        Authorization:this.tesToken
      }
    });
  }


    return next.handle(request);
  }

}