import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cleanerhome',
  templateUrl: './cleanerhome.component.html',
  styleUrls: ['./cleanerhome.component.css']
})
export class CleanerhomeComponent implements OnInit {
  user:any;
  job:any;
  
  selectedValue;
  options = ["Fencing","Bathroom Cleaning","After Party / Events Cleaning","Carpet Cleaning","Electrical Service","Gardening","High pressure water","Kitchen Cleaning","Post Construction Cleans","Roof Cleaning","Window Cleaning"]
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { this.getalljobs2(); }

  ngOnInit() {
    this.authservice.iscleaner().subscribe(res=>{
      if(res.state){
        
        }else{
          this.router.navigate(['/..']);
        }
      });
      this.authservice.getprofile().subscribe(res=>{
        this.user = res.userdata;
      })
  }
  getalljobs2(){
    this.authservice.getalljobposts2().subscribe(res=>{
      if(res.state){
        this.job = res.jobs;
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

}
