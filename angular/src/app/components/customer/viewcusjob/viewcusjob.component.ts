import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcusjob',
  templateUrl: './viewcusjob.component.html',
  styleUrls: ['./viewcusjob.component.css']
})
export class ViewcusjobComponent implements OnInit {
  job:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { this.viewcusjob(); }

  ngOnInit() {
  }
  viewcusjob(){
    this.authservice.viewcusjob().subscribe(res=>{
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
