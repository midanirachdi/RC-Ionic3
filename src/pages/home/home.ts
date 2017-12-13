import { RefugeesService } from './../../services/refugees.service';
import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";



/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  chartOptions: any;
  Babies:number;Children:number;Teenagers:number;Adults:number;Ageds:number;
  constructor(public navCtrl: NavController,public  navParams:NavParams, private refugeesService: RefugeesService)
  {
    this.refugeesService.getRefugeesPerAge().subscribe((res) => ( this.Babies = res[0], this.Children = res[1], this.Teenagers = res[2], this.Adults = res[3], this.Ageds = res[4],

    this.chartOptions={
      chart: {
        width:600,
        height:300,
        type: 'pie'
    },
    title: {
        text: 'Statistics about refugees per Age'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Babies',
            y: this.Babies
        }, {
            name: 'Children',
            y: this.Children,
            sliced: true,
            selected: true
        }, {
            name: 'Teenagers',
            y: this.Teenagers
        }, {
            name: 'Adults',
            y: this.Adults
        }, {
            name: 'Ageds',
            y: this.Ageds
        }]
    }],
    legend:{
      align: 'center',
      verticalAlign: 'bottom',
      floating: false,
      enabled: false
 }
    }));
  }

}
