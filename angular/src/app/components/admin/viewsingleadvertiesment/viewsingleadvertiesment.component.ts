import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { Action } from 'rxjs/scheduler/Action';


@Component({
  selector: 'app-viewsingleadvertiesment',
  templateUrl: './viewsingleadvertiesment.component.html',
  styleUrls: ['./viewsingleadvertiesment.component.css']
})
export class ViewsingleadvertiesmentComponent implements OnInit {
advertiesment:any;
admin:any;
  constructor(
    private authservice: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    var myadvertiesment={
      advertiesmentid:this.activatedRoute.snapshot.paramMap.get('advertiesmentid')
    }

    this.authservice.viewadvertiesment(myadvertiesment).subscribe(res => {

      if (res.state) {
        this.advertiesment=res.advertiesment;
        console.log(res.advertiesment);
       
      } else {
       
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
        console.log(res)
      }
    });

     this.authservice.viewadmin(myadvertiesment).subscribe(res => {

      if (res.state) {
        this.admin=res.admin;
        console.log(res.admin);
       
      } else {
       
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
        console.log(res)
      }
    });
   }


}

