import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-searchusers',
  templateUrl: './searchusers.component.html',
  styleUrls: ['./searchusers.component.css']
})
export class SearchusersComponent implements OnInit {
  search:string;
  recipe:any;
  imgurl:String;
  searchstatus:boolean;
  recipecount:boolean;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) {
    this.searchstatus=false;
   }

  ngOnInit() {
  }

  searchrecipe(){
    this.searchstatus=true;
    const username={
      username:this.search
    }
    this.authservice.searchUser(username).subscribe(res=>{
      
      if(res.state){
        this.recipecount=res.usercount;
      if(res.usercount){
      this.recipe =res.users;
      this.imgurl = res.users.photourl;
      //console.log(this.recipe)
      }else{
        console.log("sdddd")
        document.getElementById("norecipe").innerHTML = "Hello World";
      }
      //console.log(res);
      } else{
      //console.log(res.msg);
      this.ngFlashMessageService.showFlashMessage({messages: ["Server Error!"],dismissible: false,timeout: 4000,type: 'danger'});
      console.log(res)
      }
    });
  }
}

