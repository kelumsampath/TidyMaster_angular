import { Component, OnInit } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
images

  constructor(
    private activatedRoute: ActivatedRoute,
    private authservice:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
  ) { 
  
  }

  ngOnInit() {
    this.authservice.getads().subscribe(res=>{
      if(res.state){
       //console.log("add getted")
        //console.log(res.add)
         var pics = res.add.map(function(add) {
          return add['vendorURL'];
        });
        this.images=pics
        console.log(this.images);
        this.imageSources=this.images;
      }
        else{
          this.ngFlashMessageService.showFlashMessage({messages: ["SERVER ERROR OCCUERED!"],dismissible: true,timeout: 4000,type: 'danger'});
        }
  })
  }
 
  
   imageSources = ["https://timedotcom.files.wordpress.com/2018/05/stangel-time-drones-2018-066785.jpg",
  "https://dontgiveupworld.com/wp-content/uploads/2013/10/Facebook-Timeline-cover-on-Life2.jpg",
  "http://www.coolfbcovers.com/covers-images/download/my%20life%20fb%20cover.jpgc.jpg"];

}
