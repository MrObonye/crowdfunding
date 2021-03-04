import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="p-4" >
      <div class="row">
      <h5 class="card-title col-lg-6">{{ cardTitle }}</h5>
  <h5 class="card-sub-title col-lg-6">{{cardSubTitle}}</h5>
      </div>

  <div class="card-text">{{cardText}}</div>
  <div class="row">
  <div class="card-digits row col-lg-6 m-0">
      <h1 class="card-digits-number">{{cardNumber}}</h1>
  </div>
  <div class="col-lg-6">
  <app-rectangular-button class="mb-3"
    [buttonName]="buttonName"
    [buttonType]="buttonType">
    </app-rectangular-button>
  </div>

  </div>
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
