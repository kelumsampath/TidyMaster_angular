import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getpaidjobs',
  templateUrl: './getpaidjobs.component.html',
  styleUrls: ['./getpaidjobs.component.css']
})
export class GetpaidjobsComponent implements OnInit {
  job:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { this.getpaidjobs(); }

  ngOnInit() {
  }
  getpaidjobs(){
    this.authservice.getpaidjobs().subscribe(res=>{
      if(res.state){
        this.job = res.jobs;
        //console.log(this.job+"sujeewa");
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

}
