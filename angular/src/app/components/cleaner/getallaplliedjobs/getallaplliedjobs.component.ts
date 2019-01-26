import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallaplliedjobs',
  templateUrl: './getallaplliedjobs.component.html',
  styleUrls: ['./getallaplliedjobs.component.css']
})
export class GetallaplliedjobsComponent implements OnInit {
  job:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { this.getallappliedjobs(); }

  ngOnInit() {
  }
  getallappliedjobs(){
    this.authservice.getappliedjobs().subscribe(res=>{
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