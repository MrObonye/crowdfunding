import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { content } from 'src/app/services/content';

@Component({
  selector: 'app-ngb-modal',
  templateUrl: './ngb-modal.component.html',
  styleUrls: ['./ngb-modal.component.scss']
})
export class NgbModalComponent implements OnInit {
  @Input() name;
  contentData = content;
  selected: number;
  @ViewChild('bookmark', { static: false }) bookmarkButton: ElementRef;
  bookmarkIcon = './../../assets/images/icon-bookmark.svg';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  select(val) {
    this.selected = val;

  }
  bookMark() {
    if (this.bookmarkIcon === './../../assets/images/icon-bookmark.svg') {
      this.bookmarkIcon = './../../assets/images/icon-bookmarkcopy.svg';
      this.bookmarkButton.nativeElement.classList.add('bookmark__active');
    } else {
      this.bookmarkIcon = './../../assets/images/icon-bookmark.svg';
      this.bookmarkButton.nativeElement.classList.remove('bookmark__active');
    }
  }
  styleBorder(buttonType: string) {

    if (buttonType === 'disabled-button') {
      return {'pointer-events': 'none;', opacity: '0.3'};
    }
  }

}
