import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { NewsService } from '../../../services/news.service';
import { News } from '../../../entities/news';
import { NewsPage } from '../news';
/**
 * Generated class for the AddnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnews',
  templateUrl: 'addnews.html'
})
export class AddnewsPage {
  private newsForm : FormGroup;
  newNews = new News();
  constructor( private formBuilder: FormBuilder ,
               public navCtrl: NavController,
               public navParams: NavParams,
               private newsService:NewsService,
               public viewCtrl:ViewController
  ) {
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      content: ['', Validators.required]
    });

  }

  ionViewDidLoad() {
  }
  onSubmit(){
//    console.log(this.newsForm.value.desc);
    
    this.newNews.location=this.newsForm.value.location;
    this.newNews.content=this.newsForm.value.content;
    this.newNews.title=this.newsForm.value.content;
    let today:any=Date.now();
    this.newNews.dateOfCreation=today;
    this.newsService.AddNews(this.newNews);
   this.viewCtrl.dismiss(false);
   //this.navCtrl.popTo(NewsPage);


  }
  onClose(remove=false) {
    //this.viewCtrl.dismiss(remove);
    this.navCtrl.popTo(NewsPage);
  }
}
