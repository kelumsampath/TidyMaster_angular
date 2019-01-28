import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-runningjobs',
  templateUrl: './runningjobs.component.html',
  styleUrls: ['./runningjobs.component.css']
})
export class RunningjobsComponent implements OnInit {
  job:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router
  ) { this.runningjobs(); }

  ngOnInit() {
  }
  runningjobs(){
    this.authservice.runningjobs().subscribe(res=>{
      if(res.state){
        this.job = res.customerjobs;
        console.log(res.customerjobs);
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

}
