import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  editimagemode:boolean;
  changepassword:boolean;
  oldpass:String;
  newpass:String;
  confpass:String;
  constructor(
    private authservice : AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { 
    this.editimagemode=false;
    this.changepassword=false;
  }

  ngOnInit() {
    this.authservice.getprofile().subscribe(res=>{
      this.user = res.userdata;
      console.log(this.user)
    })
  }
  
  changepassnow(){
    this.changepassword=true;
  }
  notchangepassnow(){
    this.changepassword=false;
  }


  profpic(file:FileList){
    const image={
      editimage:file.item(0)
    }
    this.authservice.editimage(image).subscribe(res=>{
      if(res.state){
       
      this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: true,timeout: 4000,type: 'success'});
      //console.log("ela");
      this.router.navigate(['/..']);
      }
      else{
      //console.log(res.msg);
      this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: false,timeout: 4000,type: 'danger'});
      
      }
    });
  }

  changenow(){
    var pass={
      oldpass:this.oldpass,
      newpass:this.newpass,
      confpass:this.confpass
    }
    if(this.newpass==this.confpass){
      var passdata={
        oldpassword:pass.oldpass,
        newpassword:pass.newpass
      }
      this.authservice.editpassword(passdata).subscribe(res=>{
        if(res.state){
         
        this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: true,timeout: 4000,type: 'success'});
        //console.log("ela");
        this.changepassword=false;
      
        }
        else{
        //console.log(res.msg);
        this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: false,timeout: 4000,type: 'danger'});
        
        }
      });

    }else{
      alert("not matched")
    }
   
  }

}
