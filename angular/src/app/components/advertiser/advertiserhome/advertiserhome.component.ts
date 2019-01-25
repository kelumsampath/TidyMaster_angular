import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../charts/charts.component';
import * as Chartist from 'chartist';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-advertiserhome',
  templateUrl: './advertiserhome.component.html',
  styleUrls: ['./advertiserhome.component.css' ]
})


export class AdvertiserhomeComponent implements OnInit {
  
  public hoursChartType: ChartType;
  public hoursChartData: any;
  public hoursChartOptions: any;
  public hoursChartResponsive: any[];
  public hoursChartLegendItems: LegendItem[];
  active: any;
  adproviderid: any;
  profurl: String;
  user: any;
  months=[];
  values=[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) { 
    this.getUser() ;
    this.setChart();
  }

  ngOnInit() {
    
   
    /*this.hoursChartType = ChartType.Line;
    this.hoursChartData = {
      labels: ['July','August', 'September', 'October', 'November'],
      series: [
        [0,4,5,1,2],
        
      ]
    };
    this.hoursChartOptions = {
      low: 0,
     
      showArea: true,
      height: '245px',
      axisX: {
        showGrid: true,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 4
      }),
      showLine: false,
      showPoint: true,
    };
    this.hoursChartResponsive = [
      ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.hoursChartLegendItems = [
      { title: 'Activity', imageClass: 'fa fa-circle text-info' },

    ];*/
    
    }
    setChart() {
      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: this.months,
        series: [this.values,]
      };
      this.hoursChartOptions = {
        low: 0,
  
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: true,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 4
        }),
        showLine: false,
        showPoint: true,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.hoursChartLegendItems = [
        { title: 'Activity', imageClass: 'fa fa-circle text-info' },
  
      ];
    }
    getUser() {
  
  
      this.authservice.getAllAdsByMonth().subscribe(res => {
       // console.log(res.state)
        if (res.state) {
          this.active = res.ad;
          
          // var data = JSON.parse(this.active); 
          console.log("this.active")
          var i;
          for (i = 0; i < this.active.length; i++) {
        
            this.months.push(this.active[i].month);
            this.values.push(this.active[i].count);
          }
          //console.log(this.values[2])
  
  
        }
        else {
          this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
        }
      })
  
    };
  }

