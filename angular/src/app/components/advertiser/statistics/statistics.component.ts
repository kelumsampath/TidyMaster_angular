import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../charts/charts.component';
import * as Chartist from 'chartist';
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
  list:any[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authservice.getprofile().subscribe(res=>{
      this.user = res.userdata;
    })
    this.getAllAds();
  }

  getAllAds(){
    this.authservice.getAllAds().subscribe(res => {
      
       if (res.state) {
         this.ads = res.ad;
         
         // var data = JSON.parse(this.active); 
         console.log("this.active");
         var i;
        for (i = 0; i < this.ads.length; i++) {
           
           var c = this.ads[i].createdDateAndTime;
           var splitted = c.split("T");
           this.ads[i].createdDateAndTime = splitted[0];
           
           var s = this.ads[i].expiredDateAndTime;
           var splitted = s.split("T");
           this.ads[i].expiredDateAndTime = splitted[0];
           
         }
         //console.log(this.values[2])
       }
       else {
         this.ngFlashMessageService.showFlashMessage({ messages: ["SERVER ERROR OCCUERED!"], dismissible: true, timeout: 4000, type: 'danger' });
       }
     })
 
   };
  
}
