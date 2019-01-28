import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Chart } from 'chart.js';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  ads: any;
  user: any;
  list: any[];
  /*public dailyChartType: ChartType;
  public dailyChartData: any;
  public dailyChartOptions: any;
  public dailyChartResponsive: any[];
  public dailyChartLegendItems: LegendItem[];*/
  active: any;
  adproviderid: any;
  profurl: String;
  adId: any;
  chart = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private authservice: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,

  ) {
    //  this.dailyChartType = ChartType.Bar;
    this.adId = "ad7";

  }

  ngOnInit() {
    this.authservice.advertiserLogin=true;
    this.authservice.getprofile().subscribe(res => {
      this.user = res.userdata;
    })
    this.getAllAds();

  }

  getAllAds() {
    this.authservice.getAllAds().subscribe(res => {

      if (res.state) {
        this.ads = res.ad;
        var i;
        for (i = 0; i < this.ads.length; i++) {

          var c = this.ads[i].createdDateAndTime;
          var splitted = c.split("T");
          this.ads[i].createdDateAndTime = splitted[0];

          var s = this.ads[i].expiredDateAndTime;
          var splitted = s.split("T");
          this.ads[i].expiredDateAndTime = splitted[0];

        }
      }
      else {
        this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
      }
    })

  };
 
  public selectUsers(event: any, ad: any) {
    var months = [];
    var values = [];

    this.adId = ad.adId;

    const ids = {
      id: this.adId
    }

    this.authservice.getDailyViews(ids).subscribe(res => {
      console.log(res.state)

      if (res.state) {
        this.active = res.ad;

        var i;
        for (i = 0; i < this.active.length; i++) {
          var c = this.active[i].date;
          var splitted = c.split("T");
          months.push(splitted[0]);
          values.push(this.active[i].noOfApears);
        }
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: months,
            datasets: [
              { 
                data: values,
                borderColor: "#3cba9f",
                fill: false
              },
           
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });

      }
      else {
        this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
      }
    })
  }
}
