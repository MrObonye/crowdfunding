import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-circle-button',
  template: `<button type="button" class="btn btn-circle" (click)="onClick">
    <fa-icon [icon]="faBookMark" class="icon"></fa-icon>
    </button>`,
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
