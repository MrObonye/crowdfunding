import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rectangular-button',
  template: `<button type="button" [ngClass]="styleButton()" (click)="onClick">{{buttonName}}</button>`
})
export class RectangularButtonComponent implements OnInit {

  @Output() pressButton = new EventEmitter();
  @Input() buttonName: string;
  @Input() buttonType: string;

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.pressButton.emit();
  }
  styleButton() {
    if (this.buttonType === 'accept-button') {
      return {
        'accept-button': true,

      };
    } else if (this.buttonType === 'card-button') {
      return {
        'card-button': true,
      };
    } else if (this.buttonType === 'disabled-button') {
      return {
        'disabled-button': true
      };
    } else {
      return {
        btn: true,
        'btn btn-success': true
      };
    }

  }


}
