import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cleanerhome',
  templateUrl: './cleanerhome.component.html',
  styleUrls: ['./cleanerhome.component.css']
})
export class CleanerhomeComponent implements OnInit {

  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.authservice.iscleaner().subscribe(res=>{
      if(res.state){
        
        }else{
          this.router.navigate(['/..']);
        }
      })
  }

}
