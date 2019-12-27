import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

import { HomeSlide } from '../list-home-slides/home-slide';

// Controls the carousel for the gallery effect within each block
import { NgbCarouselConfig, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PORTFOLIOSLIDES, RESUMESLIDES, BLOGSLIDES, CONTACTSLIDES } from '../list-home-slides/slides-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  // Disables controls
  showNavigation: boolean = false;

  // Controls the interval for each carousel, to create pseudo-randomness
  baseIntervalSpeed: number = 4500;
  carouselIntervals: number[];

  // Creates the lists of images available for each navigation tile to cycle between
  // Resume
  resumeImages: HomeSlide[] = RESUMESLIDES;
  resumeSlides: HomeSlide[];
  // Portfolio
  portfolioImages: HomeSlide[] = PORTFOLIOSLIDES;
  portfolioSlides: HomeSlide[];
  // Blog
  blogImages: HomeSlide[] = BLOGSLIDES;
  blogSlides: HomeSlide[];
  // Contact
  contactImages: HomeSlide[] = CONTACTSLIDES;
  contactSlides: HomeSlide[];

  constructor(
    private titleService: TitleService,
    config: NgbCarouselConfig
  ) {
    this.titleService.setHomeTitle();

    // Pauses any carousel upon hover
    config.pauseOnHover = true;

    // Randomize intervals
    this.carouselIntervals = [
      this.baseIntervalSpeed + (Math.floor(Math.random() * 1000)),
      this.baseIntervalSpeed + (Math.floor(Math.random() * 999)),
      this.baseIntervalSpeed + (Math.floor(Math.random() * 998)),
      this.baseIntervalSpeed + (Math.floor(Math.random() * 997)),
    ]

    // Randomize all of the image slides
    this.portfolioSlides = shuffleCarouselSlides(this.portfolioImages);
    this.resumeSlides = shuffleCarouselSlides(this.resumeImages);
    this.blogSlides = shuffleCarouselSlides(this.blogImages);
    this.contactSlides = shuffleCarouselSlides(this.contactImages);
  }

  ngOnInit() {
  }

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Basic TS array shuffler
function shuffleCarouselSlides(slides: HomeSlide[]) {
  let currentIndex: number, swapElem: HomeSlide, nextElemIndex: number;
  currentIndex = slides.length;

  while(currentIndex) {
    //Grab a random array position
    nextElemIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    //Save the position to be switched
    swapElem = slides[currentIndex];
    slides[currentIndex] = slides[nextElemIndex];
    slides[nextElemIndex] = swapElem;
    //Switch the element with the current element
  }

  return slides;

}
