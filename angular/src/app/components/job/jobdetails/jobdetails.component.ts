import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit {
  postid:any;
  title:String;
  status:String;
  jobdate:String;
  levelofjob:String;
  employeegender:String;
  priceperhour:String;
  estimatedtime:String;
  numberofcleaners:Number;
  joblocation:String;
  splitted:any;
  date:String;
  Promotestatus:String;
  constructor(
              private activatedRoute: ActivatedRoute,
              private authservice:AuthService,
              private ngFlashMessageService: NgFlashMessageService,
              private router:Router,
  ) { 
    this.postid={
      postid:this.activatedRoute.snapshot.paramMap.get('postid')
    }
    this.authservice.getjobpost(this.postid).subscribe(res=>{
      if(res.state){
        
          this.title=res.job.title;
          this.jobdate=res.job.jobdate;
          this.levelofjob=res.job.levelofjob;
          this.employeegender=res.job.employeegender;
          this.priceperhour=res.job.priceperhour;
          this.estimatedtime=res.job.estimatedtime;
          this.numberofcleaners=res.job.numberofcleaners;
          this.joblocation=res.job.joblocation;
          this.splitted = this.jobdate.split("T",2);
          this.date=this.splitted[0];
          this.Promotestatus=res.job.paymentstatus;
          console.log(res.job)
      }
    
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })

 
  }

  ngOnInit() {
  }
  apply(){
    this.authservice.applyjob(this.postid).subscribe(res=>{
      if(res.state){
        console.log("applied")
        this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: true,timeout: 4000,type: 'success'});
        this.router.navigate(['/cleanerhome']);
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

  promote(){
    var post={
      postid:this.postid
    }
    this.authservice.promotejob(post).subscribe(res=>{
      if(res.state){
        console.log("promoted")
        this.ngFlashMessageService.showFlashMessage({messages: [res.msg],dismissible: true,timeout: 4000,type: 'success'});
        this.router.navigate(['/viewjobs',this.postid]);
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }
}
