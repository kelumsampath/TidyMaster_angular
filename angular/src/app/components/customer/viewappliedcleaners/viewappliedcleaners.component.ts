import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewappliedcleaners',
  templateUrl: './viewappliedcleaners.component.html',
  styleUrls: ['./viewappliedcleaners.component.css']
})
export class ViewappliedcleanersComponent implements OnInit {
  data:any;
  post:any;
  constructor(
    private authservice: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
     this.post={
      postid:this.activatedRoute.snapshot.paramMap.get('postid')
     // postid:"-0-Z8CPBN"
    }
    this.authservice.viewappliedcleaners(this.post).subscribe(res=>{
      if(res.state===true){
        this.data=res.cleaners;
        console.log(this.data)
      }
  })
  }
  confirmapply(cleanerid){
    var data={
      cleanerid:cleanerid,
      postid:this.post.postid
    }
    console.log(data)
    this.authservice.confirmcleaner(data).subscribe(res=>{
      if(res.state){
        alert("applied");
        
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

  confirm(uname){
    var user={
      username:uname
    }
    console.log(uname)
    this.authservice.getcleanerprof(user).subscribe(res=>{
      if(res.state){
       // alert("applied1")
        console.log(res.userdata)
        this.confirmapply(res.userdata.cleanerid)
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

}
