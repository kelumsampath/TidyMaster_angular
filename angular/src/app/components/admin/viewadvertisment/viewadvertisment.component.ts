import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-viewadvertisment',
  templateUrl: './viewadvertisment.component.html',
  styleUrls: ['./viewadvertisment.component.css']
})
export class ViewadvertismentComponent implements OnInit {
  advertisments:any;
  constructor(
    private authservice: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) {
    this.authservice.getadvetisments().subscribe(res=>{
      if(res.state){
        this.advertisments=res.advertisments;
        console.log(this.advertisments)
      }else{
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
        console.log(res)
      }
    })
   }

  ngOnInit() {
  }

}
