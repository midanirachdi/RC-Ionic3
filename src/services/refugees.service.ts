import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Refugee } from '../entities/refugee';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RefugeesService {

  // token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6Mywicm9sZSI6IkNhbXBDaGVmIn0.W8_n4zNk3-7wGttYWkSreT6wuLtkemuKJ3-Pq9_vZJhSjQfa2NLaPCtGFZRk0LbrBKaar3k4ApTS_jdwkUcH5Q';
  REFUGEES_URL="http://localhost:18080/refugeesCamp-web/api/Refugees";
  constructor(private http: HttpClient) {
  }

  public GetAllRefugees(): Observable<Refugee[]> {
    return this.http.get<Refugee[]>(this.REFUGEES_URL);
  }

  public getRefugeesPerAge() {
    return this.http.get(this.REFUGEES_URL + '/AgeCategory');
  }

}
