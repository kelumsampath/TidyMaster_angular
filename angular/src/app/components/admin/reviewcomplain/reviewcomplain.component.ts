import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-reviewcomplain',
  templateUrl: './reviewcomplain.component.html',
  styleUrls: ['./reviewcomplain.component.css']
})
export class ReviewcomplainComponent implements OnInit {
  complains: any;
  searchstatus: boolean;
  constructor(
    private authservice: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.searchAlluser()
  }

  searchAlluser() {
    this.searchstatus = true;

    this.authservice.uncheckedcomplains().subscribe(res => {

      if (res.state) {
          this.complains = res.complains;
          console.log(this.complains)
        
        //console.log(res);
      } else {
        //console.log(res.msg);
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
        console.log(res)
      }
    });
  }

  complaineduserremove(uid,complainid) {
    var user = {
      uid: uid,
      complainid:complainid
    }
    //alert(user.uid)
    this.authservice.complaineduserremove(user).subscribe(res => {
      if (res.state) {
        this.ngFlashMessageService.showFlashMessage({ messages: ["user removed!"], dismissible: true, timeout: 4000, type: 'success' });
        this.searchAlluser();
      }
      else {
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
      }
    })
  }
  complaineduserwarn(uid,complainid) {
    var reason = prompt("Please enter reason:", "warn");
    if (reason == null || reason == "") {

    } else {
      var user = {
        uid: uid,
        reason:reason,
        complainid:complainid
      }
      this.authservice.complaineduserwarn(user).subscribe(res => {
        if (res.state) {
          this.ngFlashMessageService.showFlashMessage({ messages: ["user Warned!"], dismissible: true, timeout: 4000, type: 'success' });
          this.searchAlluser();
        }
        else {
          this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
        }
      })

    }
  }
}

