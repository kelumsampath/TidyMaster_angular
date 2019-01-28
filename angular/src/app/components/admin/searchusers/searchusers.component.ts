import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-searchusers',
  templateUrl: './searchusers.component.html',
  styleUrls: ['./searchusers.component.css']
})
export class SearchusersComponent implements OnInit {
  search: string;
  users: any;
  imgurl: String;
  searchstatus: boolean;
  usercount: boolean;
  constructor(
    private authservice: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) {
    this.searchstatus = false;
  }

  ngOnInit() {
    this.searchAlluser()
  }

  searchuser() {
    this.searchstatus = true;
    const username = {
      username: this.search
    }
    this.authservice.searchUser(username).subscribe(res => {

      if (res.state) {
        this.usercount = res.usercount;
        if (res.usercount) {
          this.users = res.users;
          this.imgurl = res.users.photourl;
          //console.log(this.recipe)
        } else {
          alert("no user found!")
        }
        //console.log(res);
      } else {
        //console.log(res.msg);
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
        console.log(res)
      }
    });
  }

  searchAlluser() {
    this.searchstatus = true;

    this.authservice.searchAllUser().subscribe(res => {

      if (res.state) {
        this.usercount = res.usercount;
        if (res.usercount) {
          this.users = res.users;
          this.imgurl = res.users.photourl;
          console.log(this.users)
        } else {
          document.getElementById("norecipe").innerHTML = "Hello World";
        }
        //console.log(res);
      } else {
        //console.log(res.msg);
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
        console.log(res)
      }
    });
  }

  remove(uid) {
    var reason = prompt("Please enter reason:", "Remove");
    if (reason == null || reason == "") {

    } else {
    var user = {
      uid: uid,
      reason:reason
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

