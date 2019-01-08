import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-main-slides',
  templateUrl: './main-slides.component.html',
  styleUrls: ['./main-slides.component.scss']
})
export class MainSlidesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slider').slider();
  }

}
