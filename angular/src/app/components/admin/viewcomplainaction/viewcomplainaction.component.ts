
import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { Action } from 'rxjs/scheduler/Action';


@Component({
  selector: 'app-viewcomplainaction',
  templateUrl: './viewcomplainaction.component.html',
  styleUrls: ['./viewcomplainaction.component.css']
})
export class ViewcomplainactionComponent implements OnInit {
complain:any;
action:any;
  constructor(
    private authservice: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    var complaindata={
      complainid:this.activatedRoute.snapshot.paramMap.get('actcomplainid')
    }

    this.authservice.viewcomplain(complaindata).subscribe(res => {

      if (res.state) {
        this.complain=res.complain;
        console.log(res.complain);
       
      } else {
       
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
        console.log(res)
      }
    });

     this.authservice.viewcomplainaction(complaindata).subscribe(res => {

      if (res.state) {
        this.action=res.action;
        console.log(res.action);
       
      } else {
       
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
        console.log(res)
      }
    });
  }


}

