import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getdonejobs',
  templateUrl: './getdonejobs.component.html',
  styleUrls: ['./getdonejobs.component.css']
})
export class GetdonejobsComponent implements OnInit {
  job:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { this.getdonejobs(); }

  ngOnInit() {
  }

  getdonejobs(){
    this.authservice.getdonejobs().subscribe(res=>{
      if(res.state){
        this.job = res.jobs;
        console.log(this.job);
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

}
