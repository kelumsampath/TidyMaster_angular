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
  jobdate:Date;
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
          this.status=res.job.status;
          this.jobdate=res.job.jobdate;
          

      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

  ngOnInit() {
  }
  getpost(){
    
  }
}
