import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  siteName: string = "Riley Abrahamson";

  constructor(private titleService: Title) { }

  getTitle() {
      this.titleService.getTitle();
  }
  setHomeTitle() {
      this.titleService.setTitle(this.siteName);
  }
  setSecondaryTitle(newTitle: string) {
      this.titleService.setTitle(this.siteName + " | " + newTitle);
  }
  setTertiaryTitle(newSecondTitle: string, newThirdTItle: string) {
    this.titleService.setTitle(this.siteName + " | " + newSecondTitle + " | " + newThirdTItle);
}
  
}