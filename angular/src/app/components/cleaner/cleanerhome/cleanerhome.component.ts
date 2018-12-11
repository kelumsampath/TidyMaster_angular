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
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { this.getalljobs(); }

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
  getalljobs(){
    this.authservice.getalljobposts().subscribe(res=>{
      if(res.state){
        this.job = res.jobs;
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

}
