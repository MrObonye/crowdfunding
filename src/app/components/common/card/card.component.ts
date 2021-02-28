import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div class="card" style="width: 259px; height: 325px;">
  <h5 class="card-title">{{ cardTitle }}</h5>
  <h5 class="card-sub-title">{{cardSubTitle}}</h5>
  <div class="card-text">{{cardText}}</div>
  <div class="card-digits row m-0">
      <h1 class="card-digits-number">{{cardNumber}}</h1>
      <p class="card-digits-text p-2 m-1">left</p>
  </div>
  <app-rectangular-button
  [buttonName]="buttonName"
  [buttonType]="buttonType">
</app-rectangular-button>
  </div>`,
})
export class CardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() cardSubTitle: string;
  @Input() cardText: string;
  @Input() cardNumber: number;
  @Input() buttonName: string;
  @Input() buttonType: string;


  constructor() { }

  ngOnInit(): void {
  }

}
