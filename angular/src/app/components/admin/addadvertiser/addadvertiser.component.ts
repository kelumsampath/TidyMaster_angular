import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addadvertiser',
  templateUrl: './addadvertiser.component.html',
  styleUrls: ['./addadvertiser.component.css']
})
export class AddadvertiserComponent implements OnInit {
  firstname:String;
  lastname:String;
  username:String;
  email:String;
  phoneno:Number;
  nic:String;
  gender:String;
  role="advertiser";
  address:String;

  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  registerData(){
    const user={
      firstname:this.firstname,
      lastname:this.lastname,
      username:this.username,
      email:this.email,
      gender:this.gender,
      phoneno:this.phoneno,
      nic:this.nic,
      role:this.role,
      address:this.address
    }
    console.log(user);
    this.authservice.registerAdvertiser(user).subscribe(res=>{
      if(res.state){
      this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: true,timeout: 4000,type: 'success'});
      //this.router.navigate(['/login']);
      }else{
      console.log(res.msg);
      this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: false,timeout: 4000,type: 'danger'});
      //this.router.navigate(['/register']);
      }
    });
    
  }
}
