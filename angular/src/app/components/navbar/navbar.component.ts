import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  constructor(
    private router:Router,
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
  ) { }

  ngOnInit() {
    this.authservice.getprofile().subscribe(res=>{
      this.user = res.userdata;
    })
  }

  logoutUser(){
    this.authservice.logOut().subscribe(res=>{
    if(res.state){
      this.authservice.adminorsuperadmin=false;
      this.ngFlashMessageService.showFlashMessage({messages: ["You are successfully logged out!"],dismissible: true,timeout: 4000,type: 'success'});
      this.router.navigate(['/home']);
      return false;
    }})
    
  }


}
