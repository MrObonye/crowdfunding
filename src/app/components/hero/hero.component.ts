import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { content } from 'src/app/services/content';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  buttonName = 'Back this project';
  buttonType = 'accept-button';
  @ViewChild('bookmark', {static: false}) bookmarkButton: ElementRef;
  bookmarkIcon = './../../assets/images/icon-bookmark.svg';

  selected: number;
  analyticsData = [{
    amount: '$89,914',
    total: 'of $100,000 backed'
  },
  { amount: '5,007', total: 'total backers' },
  { amount: '56', total: 'days left' }];

  contentData = content;
  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
  }
  openModal(id: string): void {

    this.modalService.open(id);
  }
  closeModal(id: string): void {
    this.modalService.close(id);
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
}
