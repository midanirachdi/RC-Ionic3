import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {CourseService} from "../../../services/course.service";
import {Course} from "../../../entities/course";

/**
 * Generated class for the AddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-course',
  templateUrl: 'add-course.html',
  providers:[DatePipe]

})
export class AddCoursePage {

  private courseForm : FormGroup;


  constructor(
    private viewCtrl: ViewController,
    private formBuilder: FormBuilder ,
    private datePipe: DatePipe,
    private cs:CourseService,
    public navCtrl: NavController,
    public navParams: NavParams
    ) {


    this.courseForm = this.formBuilder.group({
      nam: ['', Validators.required],
      descriptio: ['', Validators.required],
      startdat: ['', Validators.required],
      enddat: ['', Validators.required]

    });
  }



  ionViewDidLoad() {
    // console.log('ionViewDidLoad AddCoursePage');
  }

  submitForm(){
    console.log(this.courseForm.value.desc);
    const newCourse = new Course(
      this.courseForm.value.desc,
      this.datePipe.transform(this.courseForm.value.enddat, 'yyyy-MM-dd'),
      this.datePipe.transform(this.courseForm.value.startdat, 'yyyy-MM-dd'),
      this.courseForm.value.descriptio,
      this.courseForm.value.nam,
      );

    this.cs.addCour(newCourse).subscribe(
      (courseAdd:Course)=>{}
    );
    this.cs.courseAdd.emit(newCourse);
    this.viewCtrl.dismiss(false);
  }

  onClose(remove=false) {
    this.viewCtrl.dismiss(remove);
  }

}

