import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewactivejob',
  templateUrl: './viewactivejob.component.html',
  styleUrls: ['./viewactivejob.component.css']
})
export class ViewactivejobComponent implements OnInit {
  job:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { this.viewactivejob(); }

  ngOnInit() {
  }
  viewactivejob(){
    this.authservice.viewactivejob().subscribe(res=>{
      if(res.state){
        this.job = res.customerjobs;
        console.log(this.job);
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

}
