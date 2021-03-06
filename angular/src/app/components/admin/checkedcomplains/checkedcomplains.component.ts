import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-checkedcomplains',
  templateUrl: './checkedcomplains.component.html',
  styleUrls: ['./checkedcomplains.component.css']
})
export class CheckedcomplainsComponent implements OnInit {
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

    this.authservice.checkedcomplains().subscribe(res => {

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

  remove(uid) {
    var user = {
      uid: uid
    }
    //alert(user.uid)
    this.authservice.removeuser(user).subscribe(res => {
      if (res.state) {
        this.ngFlashMessageService.showFlashMessage({ messages: ["user removed!"], dismissible: true, timeout: 4000, type: 'success' });
        this.searchAlluser();
      }
      else {
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'danger' });
      }
    })
  }
  warn(uid) {
    var reason = prompt("Please enter reason:", "warn");
    if (reason == null || reason == "") {

    } else {
      var user = {
        uid: uid,
        reason:reason
      }
      this.authservice.warnuser(user).subscribe(res => {
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

