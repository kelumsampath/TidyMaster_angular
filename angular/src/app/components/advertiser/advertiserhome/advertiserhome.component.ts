import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Chart } from 'chart.js';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-advertiserhome',
  templateUrl: './advertiserhome.component.html',
  styleUrls: ['./advertiserhome.component.css' ]
})


export class AdvertiserhomeComponent implements OnInit {
  
  /*public hoursChartType: ChartType;
  public hoursChartData: any;
  public hoursChartOptions: any;
  public hoursChartResponsive: any[];
  public hoursChartLegendItems: LegendItem[];*/
  active: any;
  adproviderid: any;
  profurl: String;
  user: any;
  months=[];
  values=[];
  chart=[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) { 
    authservice.advertiserLogin=true;
  }

  ngOnInit() {
    
    this.authservice.getAllAdsByMonth().subscribe(res => {
     
       if (res.state) {
         this.active = res.ad;
  
        
         var i;
         for (i = 0; i < this.active.length; i++) {
       
           this.months.push(this.active[i].month);
           this.values.push(this.active[i].count);
         }
         this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.months,
            datasets: [
              { 
                data: this.values,
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
    
    };
  }