import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getnonpaidjobs',
  templateUrl: './getnonpaidjobs.component.html',
  styleUrls: ['./getnonpaidjobs.component.css']
})
export class GetnonpaidjobsComponent implements OnInit {
  job:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { this.getnonpaidjobs(); }

  ngOnInit() {
  }

  getnonpaidjobs(){
    this.authservice.getnonpaidjobs().subscribe(res=>{
      if(res.state){
        this.job = res.jobs;
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }
}
