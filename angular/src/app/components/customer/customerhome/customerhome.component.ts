import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {
  user:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.authservice.iscustomer().subscribe(res=>{
      if(res.state){
        
        }else{
          this.router.navigate(['/..']);
        }
      });
      this.authservice.getprofile().subscribe(res=>{
        this.user = res.userdata;
      })
  }

}
