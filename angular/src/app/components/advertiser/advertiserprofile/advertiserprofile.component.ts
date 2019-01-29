import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-advertiserprofile',
  templateUrl: './advertiserprofile.component.html',
  styleUrls: ['./advertiserprofile.component.css']
})
export class AdvertiserprofileComponent implements OnInit {
  user: any;
  username: any;
  profurl: String;
  public files: any[];
  changepassword: boolean;
  currentpassword: String;
  password: String;
  password2: String;
  selectedFile: File

  imagef:any;

  firstname: String;
  lastname: String;
  email: String;
  phoneno: Number;
  nic: String;
  gender: String;
  role: String;
  address: String;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authservice: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) {
    authservice.advertiserLogin = true;
    this.changepassword = false;
    this.files = [];
  }


  ngOnInit() {
    this.authservice.advertiserLogin = true;
    this.authservice.getprofile().subscribe(res => {
      this.user = res.userdata;
      this.firstname = this.user.firstName;
     
      this.lastname = this.user.lastName;
      this.email = this.user.email;
      this.phoneno = this.user.telephone;
      this.nic = this.user.nic;
      this.gender = this.user.gender;
      this.address = this.user.address;
    })
    console.log(this.firstname);
    this.authservice.loadprofpic().subscribe(res => {
      if (res.state) {
        console.log(res.data.url);
        this.profurl = res.data.url;
        this.username = res.data.username;
      } else {
        console.log("error image url load")
      }
    })
  }

  changepassnow() {
    this.changepassword = true;
  }


  notchangepassnow() {
    this.changepassword = false;
  }


  changenow() {
    var pass = {
      password: this.password,
      password2: this.password2,
      currentpassword: this.currentpassword,
    }
    if (this.password == null && this.password == null && this.password == null) {
      alert("Invalid Values");
    } else if ((this.password == this.password2)) {

      var passdata = {
        oldpassword: pass.currentpassword,
        newpassword: pass.password2
      }
      this.authservice.editpassword(passdata).subscribe(res => {
        if (res.state) {

          this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
          //console.log("ela");
          this.changepassword = false;
          this.password = null;
          this.password2 = null;
          this.currentpassword = null;
        }
        else {
          //console.log(res.msg);
          this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });

        }
      });

    } else {
      alert("Invalid Values")
    }


  }


  setprofpic() {
    const image = {
      editimage: this.imagef

    }
    console.log(image);
    this.authservice.editimage(image).subscribe(res => {
      if (res.state) {

        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
        //console.log("ela");
        this.router.navigate(['/advertiserprofile']);
      }
      else {
        //console.log(res.msg);
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });

      }
    });
  }
  profpic(file:FileList){
    const image={
      editimage:file.item(0)
    }
    console.log(image);
    this.imagef= file.item(0);
  }

  updateProfile() {
    const profile = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      gender: this.gender,
      phoneno: this.phoneno,
      nic: this.nic,
      address: this.address
    }
    console.log(profile);
    this.authservice.editprofile(profile).subscribe(res => {
      if (res.state) {
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });

        this.router.navigate(['/advertiserprofile']);
      } else {
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
      }
    })
  }
}