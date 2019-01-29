import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/auth.service";
import { NgFlashMessageService } from 'ng-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewcustomerprofile',
  templateUrl: './viewcustomerprofile.component.html',
  styleUrls: ['./viewcustomerprofile.component.css']
})
export class ViewcustomerprofileComponent implements OnInit {
  user:any;
  constructor(
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    var customerid={
      customerId:this.activatedRoute.snapshot.paramMap.get('customerid')
    }
    this.authservice.viewcustomerprofile(customerid).subscribe(res=>{
      this.user = res.userdata;
      console.log(res.userdata);
  })
  }

}
