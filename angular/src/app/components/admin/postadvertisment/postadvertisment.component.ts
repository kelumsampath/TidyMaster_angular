import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postadvertisment',
  templateUrl: './postadvertisment.component.html',
  styleUrls: ['./postadvertisment.component.css']
})
export class PostadvertismentComponent implements OnInit {
  selectedValue;
  options = [1, 2, 3]
  constructor() { }

  ngOnInit() {
  }
  onOptionsSelected(event){
    //alert(event.type)
   console.log(event); //option value will be sent as event
  }

}
