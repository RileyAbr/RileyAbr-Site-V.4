import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TitleService } from '../title.service';

import { PortfolioProject } from '../list-portfolio-projects/portfolio-project';
import { PROJECTLIST } from '../list-portfolio-projects/projects-list';

//Controls the launching of the project preview modals
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects: PortfolioProject[] = PROJECTLIST;

  constructor(
    private titleService: TitleService,
    private modalService: NgbModal
  ) {
    this.titleService.setSecondaryTitle("Portfolio");
  }

  open(content) {
    this.modalService.open(content);
  }

}
