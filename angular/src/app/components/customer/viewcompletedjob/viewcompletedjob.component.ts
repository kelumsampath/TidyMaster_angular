import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcompletedjob',
  templateUrl: './viewcompletedjob.component.html',
  styleUrls: ['./viewcompletedjob.component.css']
})
export class ViewcompletedjobComponent implements OnInit {
  job:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { this.viewcompletedjob(); }

  ngOnInit() {
  }
  viewcompletedjob(){
    this.authservice.viewcompletedjob().subscribe(res=>{
      if(res.state){
        this.job = res.customerjobs;
        console.log(this.job);
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }

}
