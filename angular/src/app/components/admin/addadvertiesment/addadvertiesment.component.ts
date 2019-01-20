import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { Options } from 'selenium-webdriver/edge';

@Component({
  selector: 'app-addadvertiesment',
  templateUrl: './addadvertiesment.component.html',
  styleUrls: ['./addadvertiesment.component.css']
})
export class AddadvertiesmentComponent implements OnInit {
  title: String;
  venderurl: String;
  imageUrl: String = "../../../assets/defualt.jpg";
  startdate:Date;
  enddate:Date;
  fileToUpload: File = null;
  selectedValue = 'null';
  options = []
  constructor(
    private authservice: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) {
    this.fileToUpload = new File([""], "defualt.jpg");
    //this.fileToUpload = new File([''], "../../../assets/images/defualt.jpg");
    //console.log(this.fileToUpload);
    this.authservice.alladproviders().subscribe(res => {
      if (res.state) {
        console.log(res.addproviders);
        this.options = res.addproviders;
      }
      else {
        //console.log(res.msg);
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
        //this.router.navigate(['/register']);
      }
    })
  }

  ngOnInit() {
  }
  onOptionsSelected(event) {
    //alert(event.type)
    console.log(event); //option value will be sent as event
  }
  postadd() {
    const advertiesment = {
      title: this.title,
      venderurl: this.venderurl,
      addprovider: this.selectedValue,
      fileToUpload:this.fileToUpload,
      startdate:this.startdate,
      enddate:this.enddate
    }
    this.authservice.addadvertiesment(advertiesment).subscribe(res => {
      if (res.state) {
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: true, timeout: 4000, type: 'success' });
        //this.router.navigate(['/login'])
        ;
      }
      else {
        //console.log(res.msg);
        this.ngFlashMessageService.showFlashMessage({ messages: [res.msg], dismissible: false, timeout: 4000, type: 'danger' });
        //this.router.navigate(['/register']);
      }
    });

  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //preview image
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;

    }
    reader.readAsDataURL(this.fileToUpload);
  }

}

