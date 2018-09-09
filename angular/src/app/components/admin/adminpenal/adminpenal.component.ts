import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminpenal',
  templateUrl: './adminpenal.component.html',
  styleUrls: ['./adminpenal.component.css']
})
export class AdminpenalComponent implements OnInit {
job:any;

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
  this.authservice.acceptpost(postid).subscribe(res=>{
    if(res.state){
     this.getpost();
    }
      else{
        this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
      }
})
}

reject(postid){
  this.authservice.rejectpost(postid).subscribe(res=>{
    if(res.state){
     this.getpost();
    }
      else{
        this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
      }
})
}

pending(postid){
  this.authservice.pendingpost(postid).subscribe(res=>{
    if(res.state){
     this.getpost();
    }
      else{
        this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
      }
})
}

}
