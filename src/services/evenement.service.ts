import { Evenement } from './../entities/Evenement';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Refugee } from '../entities/refugee';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EvenementService {

  // token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6Mywicm9sZSI6IkNhbXBDaGVmIn0.W8_n4zNk3-7wGttYWkSreT6wuLtkemuKJ3-Pq9_vZJhSjQfa2NLaPCtGFZRk0LbrBKaar3k4ApTS_jdwkUcH5Q';
  EVENEMENT_URL="http://localhost:18080/refugeesCamp-web/api/evenements";
  constructor(private http: HttpClient) {
  }

  public GetAllEvents(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.EVENEMENT_URL);
  }

}
