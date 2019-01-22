import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-advertiserprofile',
  templateUrl: './advertiserprofile.component.html',
  styleUrls: ['./advertiserprofile.component.css']
})
export class AdvertiserprofileComponent implements OnInit {
  user:any;
  username:any;
  profurl:String;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { }

 
    ngOnInit() {
      this.authservice.getprofile().subscribe(res=>{
        this.user = res.userdata;
      })
      this.authservice.loadprofpic().subscribe(res=>{
        if(res.state){
          console.log(res.data.url);
          this.profurl=res.data.url;
          //this.username=res.data.username;
          }else{
          console.log("error image url load")
          }
        })
    }

    
    
   
}
