import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsuperadmin',
  templateUrl: './addsuperadmin.component.html',
  styleUrls: ['./addsuperadmin.component.css']
})
export class AddsuperadminComponent implements OnInit {
  firstname:String;
  lastname:String;
  username:String;
  email:String;
  phoneno:Number;
  nic:String;
  gender:String;
  role="superadmin";
  address:String;
  company:String="NO";
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) {
    this.authservice.isadmin().subscribe(res=>{
      if(res.state){
        
        }else{
          this.router.navigate(['/..']);
        }
      })
   }

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
      address:this.address,
      company:this.company
    }
    //console.log(user);
    this.authservice.registerSuperAdmin(user).subscribe(res=>{
      if(res.state){
      this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: true,timeout: 4000,type: 'success'});
      alert(res.msg)
      }else{
      console.log(res.msg);
      this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: false,timeout: 4000,type: 'danger'});
      //this.router.navigate(['/register']);
      alert(res.msg)
      }
    });
    
  }
}
