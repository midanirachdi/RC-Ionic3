/**
 * Created by Salim on 12/5/2017.
 */

import {HttpHeaders, HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import {News} from "../entities/news";
import {Country} from "../entities/Country";
import { Injectable } from "@angular/core";

@Injectable()
export class NewsService {
  /* to change*/

  token='Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6Miwicm9sZSI6IkFkbWluIn0.i92d_eSdnQrfXCYf1JlQlmiaHDKNRhreWThoH2rT0F8b_tjzukRiAq8Qc4ASjYpEVAJWc5wKxT-FtCtrBvRNwg';
  url='http://localhost:18080/refugeesCamp-web/api/news';
  header: HttpHeaders;


  httpOptions = {
    headers : new HttpHeaders({ 'Authorization': this.token , 'Content-Type': 'application/json'})
  };
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', this.token);
    headers.append('Content-Type', "application/json");
  }
  constructor(private http: HttpClient) {

    this.header = new HttpHeaders();
    this.header.set('Authorization', this.token);
    this.header.set('Content-Type', 'application/json');



  }

  public GetAllNews() : any{
    return this.http.get(this.url);
  }

  public GetById(id: number) : Observable<News>{
    let srlink=this.url+"/"+id;
    return this.http.get<News>(srlink);

  }

  public getByCountry(country :string) : Observable<News[]>{
    return this.http.get<News[]>(this.url+"/country/"+country);
  }

  public AddNews(n: News) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.post(this.url, JSON.stringify(n),  {...this.httpOptions,responseType: 'text' }).subscribe();
  }

  public updateNews(n: News) {
    return this.http.put(this.url, JSON.stringify(n),{...this.httpOptions,responseType: 'text' });

  }

  public deleteNews(n: News) {
    return this.http.delete(this.url + '/' + n.id, {...this.httpOptions,responseType: 'text' });
  }

}

