import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullname:String;
  username:String;
  email:String;
  phoneno:Number;
  nic:String;

  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

registerData(){
  const user={
    fullname:this.fullname,
    username:this.username,
    email:this.email,
    phoneno:this.phoneno,
    nic:this.nic,
  }
  this.authservice.registerUser(user).subscribe(res=>{
    if(res.state){
    this.ngFlashMessageService.showFlashMessage({messages: ["You are registered!"],dismissible: true,timeout: 4000,type: 'success'});
    this.router.navigate(['/login']);}
    else{
    console.log(res.msg);
    this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: false,timeout: 4000,type: 'danger'});
    this.router.navigate(['/register']);
    }
  });
  
}

}
