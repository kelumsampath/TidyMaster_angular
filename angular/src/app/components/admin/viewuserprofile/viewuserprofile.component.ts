import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewuserprofile',
  templateUrl: './viewuserprofile.component.html',
  styleUrls: ['./viewuserprofile.component.css']
})
export class ViewuserprofileComponent implements OnInit {
  user:any;
  username:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.username={
      username:this.activatedRoute.snapshot.paramMap.get('username')
    }
    this.authservice.getuserprofile(this.username).subscribe(res=>{
      this.user = res.userdata;
  })
}

}
