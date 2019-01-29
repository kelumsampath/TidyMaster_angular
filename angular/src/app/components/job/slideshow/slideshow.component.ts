import { Component, OnInit } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }
   imageSources = ["https://timedotcom.files.wordpress.com/2018/05/stangel-time-drones-2018-066785.jpg",
  "https://dontgiveupworld.com/wp-content/uploads/2013/10/Facebook-Timeline-cover-on-Life2.jpg",
  "http://www.coolfbcovers.com/covers-images/download/my%20life%20fb%20cover.jpgc.jpg"];

}
