import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavParams} from 'ionic-angular';
import {Course} from "../../../entities/course";
import {CourseService} from "../../../services/course.service";
// import {CoursesPage} from "../courses/courses";
// import {CoursePage} from "../course/course";

import {AddCoursePage} from "../add-course/add-course";
import {CoursesPage} from "../courses/courses";

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage implements OnInit{

  filtreCourses: Course[];

  courses : Course[];


  constructor(
              private cs:CourseService,
              private modalCtrl: ModalController,
              public navParams: NavParams

  ) {}
////////////
  ngOnInit() {
    this.cs.getAll().subscribe(
      (courses: Course[]) => {
        this.courses = courses;
        this.filtreCourses = courses

      }
    );
    if(this.cs.courseAdd){
      this.cs.courseAdd.subscribe(
        (c : Course) =>
          this.courses.splice(0, 0, c)
      );
    }
  }
  //////////
  onViewC(c : Course) {
    const modal = this.modalCtrl.create(CoursesPage,c);
    this.cs.courseS.emit(c);
    modal.present();
  }

  onAddC() {
    const modal = this.modalCtrl.create(AddCoursePage);
    modal.present();
  }

  /////
  onDeleteC(c: Course) {
    this.cs.delete(c.id).subscribe();
    this.courses.splice(this.courses.indexOf(c), 1);
  }


  ionViewDidLoad() {
     // console.log('ionViewDidLoad CoursePage');
  }

  getItems(event: any){
    this.filtreCourses = this.courses.filter(x => x.name.toUpperCase().startsWith(event.target.value.toUpperCase()));
  }

}
