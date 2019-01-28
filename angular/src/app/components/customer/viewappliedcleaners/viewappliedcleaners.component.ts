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
  constructor(
    private authservice: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    var post={
      postid:this.activatedRoute.snapshot.paramMap.get('postid')
     // postid:"-0-Z8CPBN"
    }
    this.authservice.viewappliedcleaners(post).subscribe(res=>{
      if(res.state===true){
        this.data=res.cleaners;
        console.log(this.data)
      }
  })
  }

}
