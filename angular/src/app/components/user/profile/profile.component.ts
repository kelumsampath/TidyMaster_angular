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
  constructor(
    private authservice : AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { 
    this.editimagemode=false;
  }

  ngOnInit() {
    this.authservice.getprofile().subscribe(res=>{
      this.user = res.userdata;
      console.log(this.user)
    })
  }
  editimage(){
    this.editimagemode=true;
  }
  cncleditimage(){
    this.editimagemode=false;
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

}
