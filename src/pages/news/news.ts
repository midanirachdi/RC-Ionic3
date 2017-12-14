import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/news.service';
import { News } from '../../entities/news';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { AddnewsPage } from './addnews/addnews';
import { JobOfferAddPage } from '../job-offer-page-group/job-offer-add/job-offer-add';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news: News[];
  constructor(public navCtrl: NavController, private modlCtrl: ModalController,public navParams: NavParams, private newsService : NewsService) {
  }

  ngOnInit(): void {
    this.getNews();
  }
  addNews() {
    let modal = this.modlCtrl.create(AddnewsPage);
    modal.onDidDismiss(e=>this.getNews());

    modal.present();

  }
  getNews(){
    this.newsService.GetAllNews().subscribe(news =>{this.news = news;console.log(news)});

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }


}
