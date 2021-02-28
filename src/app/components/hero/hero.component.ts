import { Component, OnInit } from '@angular/core';
import { content } from 'src/app/services/content';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
buttonName = 'Back this project';
buttonType = 'accept-button';
analyticsData = [{
  amount: '$89,914',
  total: 'of $100,000 backed'
},
{amount: '5,007', total: 'total backers'},
{amount: '56', total: 'days left'}];

contentData = content;
  constructor() { }

  ngOnInit(): void {
  }

}
