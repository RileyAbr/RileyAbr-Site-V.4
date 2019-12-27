import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';

// For handling submission errors
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private titleService: TitleService,
    private modalService: NgbModal
  ) {
    this.titleService.setSecondaryTitle("Contact");
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
  }

}
