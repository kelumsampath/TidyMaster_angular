import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  profurl:String;
  username:String;
  userrole:String;
  address:String;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.authservice.loadprofpic().subscribe(res=>{
      if(res.state){
        console.log(res.data);
        this.profurl=res.data.url;
        this.username=res.data.username;
        this.userrole=res.data.role;
        this.address=res.data.address;
        }else{
        console.log("error image url load")
        }
      })
  }

}
