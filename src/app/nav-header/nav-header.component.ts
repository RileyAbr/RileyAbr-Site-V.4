import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  //Only show the nav-links if the user is not on the home page
  onHomePage: boolean;
  logoSelected: string;
  isCollapsed: boolean = true;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() === ''){
        this.logoSelected = "_Selected"
      } else {
        this.logoSelected = "";
      }
    });
  }

  ngOnInit() {
  }

}
