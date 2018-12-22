import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../charts/charts.component';
import * as Chartist from 'chartist';
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
  constructor() { }

  ngOnInit() {
   
    this.hoursChartType = ChartType.Line;
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

    ];
    }

  }

