import {Injectable, EventEmitter} from '@angular/core';
import   'rxjs/add/operator/map'
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import {Response} from "@angular/http";
import {Course} from "../entities/course";

@Injectable()
export class CourseService {

  courseS = new EventEmitter<Course>();
  courseAdd = new EventEmitter<Course>();
  etat = new EventEmitter<boolean>();
  courses = new EventEmitter<Course[]>();

  // token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6NSwicm9sZSI6IkRpc3RyaWN0Q2hlZiJ9.cfzBmV6AURP6V134XuCakqNGOqfD_SsHIK9j1mvFG3rWZj5RLK4-wS_FvoiBCX-uJhTgbOtb2D3gN5YRRvxhBg";
  // header: HttpHeaders;

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Authorization': this.token , 'Content-Type': 'application/json'})
  // };

  url="http://localhost:18080/refugeesCamp-web/api/course";

  constructor( private httpC: HttpClient) {
    // this.header = new HttpHeaders();
    // this.header.set('Authorization', this.token);
    // this.header.set('Content-Type', 'application/json');
  }

  public getAll() {
    return this.httpC.get(this.url)
      .catch(
        (error: Response) => {
          return Observable.throw(error.status + " " + error.statusText)
        });
  }

  public addCour(cr : Course) {
    return this.httpC.post(this.url, cr);
  }

  public update(c:Course) {
    return this.httpC.put(this.url, c);
  }

  public delete(cour_id: number) {
    return this.httpC.delete(this.url + '/' + cour_id);
  }

  getCourseById(course_id: number) {
    return this.httpC.get(this.url + '/' + course_id)
      .catch(
        (error: Response) => {
          return Observable.throw(error.status + " " + error.statusText)
        });
  }

}
