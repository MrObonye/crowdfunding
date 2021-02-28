import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-circle-button',
  template: `
    <img src="./../../assets/images/icon-bookmark.svg" alt="bookmark icon" (click)="onClick">`,
})
export class CircleButtonComponent implements OnInit {
  @Output() bookmark = new EventEmitter();
  faBookMark = faBookmark;
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.bookmark.emit();
  }
}
