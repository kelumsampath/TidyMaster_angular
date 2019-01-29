import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cleaner-side',
  templateUrl: './cleaner-side.component.html',
  styleUrls: ['./cleaner-side.component.css']
})
export class CleanerSideComponent implements OnInit {
  user:any;
  constructor(
    private authservice : AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,) { }

  ngOnInit() {
    this.authservice.getprofile().subscribe(res=>{
      this.user = res.userdata;
    })
  }

}
