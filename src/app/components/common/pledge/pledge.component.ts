import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pledge',
  templateUrl: './pledge.component.html',
  styleUrls: ['./pledge.component.scss']
})
export class PledgeComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() cardSubTitle: string;
  @Input() cardText: string;
  @Input() cardNumber: number;
  @Input() isDisabled = true;

  @Input() index: number;
  @Input() selected: number;

  @Output() enableBorder = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  select(value) {
    this.enableBorder.emit(value);

  }
}
