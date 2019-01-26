import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  loginUser(){
    const user ={
    username:this.username,
    password:this.password,
    }
    this.authservice.loginUser(user).subscribe(res=>{
      if(res.state){
        this.authservice.storeData(res.token,res.user);
        console.log(res.user.role)
        this.ngFlashMessageService.showFlashMessage({messages: ["You are loggedin!"],dismissible: true,timeout: 4000,type: 'success'});
        if(res.user.role=="admin"||res.user.role=="superadmin"){
          this.authservice.adminorsuperadmin=true;
          this.router.navigate(['/adminhome']);
        }
        else if(res.user.role=="cleaner"){
          this.authservice.cleaner=true;
          this.router.navigate(['/cleanerhome']);
        }else if(res.user.role=="advertiser"){
          this.authservice.advertiserLogin=true;
          this.router.navigate(['/advertiserhome']);
        }
        else if(res.user.role=="customer"){
          this.router.navigate(['/customerhome']);
        }
        else{
          this.router.navigate(['/profile']);
        }
      }
        else{
        this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: false,timeout: 4000,type: 'danger'});
        this.router.navigate(['/login']);
        }
    })
  };

}
