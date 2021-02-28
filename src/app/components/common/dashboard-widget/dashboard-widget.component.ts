import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget',
  template: `<div class="widget text-center">
    <h1 class="widget__title">{{amount}}</h1>
    <p class="widget__text">{{total}}</p>
  </div>`,
})
export class DashboardWidgetComponent implements OnInit {
  @Input() amount: string;
  @Input() total: string;

  constructor() { }

  ngOnInit(): void {
  }

}
