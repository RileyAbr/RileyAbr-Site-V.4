import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

import { ResumeEvent } from '../list-resume-events/resume-event';
import { ResumeListing } from '../list-resume-events/resume-listing';
import { EVENTLIST } from '../list-resume-events/events-list';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  eventList: ResumeListing[] = EVENTLIST;

  constructor(private titleService: TitleService) {
    this.titleService.setSecondaryTitle("Resume");
  }

  ngOnInit() {
  }

}
