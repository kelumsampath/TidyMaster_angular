import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendingjobposts',
  templateUrl: './pendingjobposts.component.html',
  styleUrls: ['./pendingjobposts.component.css']
})
export class PendingjobpostsComponent implements OnInit {
  job:any;
  reason:String;
  postid:String;
    constructor(
      private authservice:AuthService,
      private ngFlashMessageService: NgFlashMessageService,
      private router:Router,
    ) { 
      this.getpost();
    }
  
    ngOnInit() {
    }
  getpost(){
    this.authservice.adminalljobposts().subscribe(res=>{
      if(res.state){
        this.job = res.jobs;
        
       // console.log(this.job);
       
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }
  accept(postid){
    this.reason = prompt("Please enter reason", "correct");
    const review={
      "postid":postid,
      "reason":this.reason
    }
    this.authservice.acceptpost(review).subscribe(res=>{
      if(res.state){
       this.getpost();
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }
  
  reject(postid){
    this.reason = prompt("Please enter reason", "reject");
    const review={
      "postid":postid,
      "reason":this.reason
    }
    this.authservice.rejectpost(review).subscribe(res=>{
      if(res.state){
       this.getpost();
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }
  
  }
  
