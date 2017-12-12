import {EventEmitter, Injectable} from '@angular/core';
import { Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Joboffer} from "../entities/joboffer";
import {HttpClient} from "@angular/common/http";

interface responseGEO{
  status:string;
  results:any[];
}

@Injectable()
export class JobofferService {
  jobOfferSelected = new EventEmitter<Joboffer>();
  jobOfferAdded = new EventEmitter<Joboffer>();
  jobOffers = new EventEmitter<Joboffer[]>();
  jobOffersDetailList = new EventEmitter<Joboffer[]>();
  etat = new EventEmitter<boolean>();
  bestCands = new EventEmitter<boolean>();


//http://10.0.2.2:18080/ emulated device
  //localhost : google chrome port forwarding
  url = "http://localhost:18080/refugeesCamp-web/api/joboffers";
  urlGEO= "https://maps.googleapis.com/maps/api/geocode/json?address=";
  urlUserService = "http://localhost:18080/refugeesCamp-web/api/users";

  constructor(private httpService: HttpClient) {
  }

  //listing
  getAllJobOffers() {
    return this.httpService.get(this.url)
      .catch(
        (error: Response) => {
          return Observable.throw(error.status + " " + error.statusText)
        });
  }
  getGEO(address:string){
    return this.httpService.get<responseGEO>(this.urlGEO+address+'&key=AIzaSyAHcVsCeJyyQ7gDW8gaFyquAkoxQNN6dZA');
  }

  getJobOfferById(jobOffer_id: number) {
    return this.httpService.get(this.url + '/' + jobOffer_id)
      .catch(
        (error: Response) => {
          return Observable.throw(error.status + " " + error.statusText)
        });
  }

  getJobOffersByDistrictChiefId(districtChief_id: number) {
    return this.httpService.get(this.urlUserService + '/' + districtChief_id + '/joboffers')
      .catch(
        (error: Response) => {
          return Observable.throw(error.status + " " + error.statusText)
        });
  }

  //basic ops
  addJobOffer(jo: Joboffer) {
    //check if you can add json stringify here
    return this.httpService.post(this.url, jo);
  }

  updateJobOffer(jo: Joboffer) {
    return this.httpService.put(this.url, jo);
  }

  deleteJobOffer(jobOffer_id: number) {
    return this.httpService.delete(this.url + '/' + jobOffer_id);
  }

  //metier
  getBestCandidatesAndEmailThem(jobOffer_id: number) {
    return this.httpService.get(this.url + '/' + jobOffer_id + '/best_candidates');
  }




}
