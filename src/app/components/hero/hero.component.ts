import { Component, OnInit } from '@angular/core';
import { content } from 'src/app/services/content';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  buttonName = 'Back this project';
  buttonType = 'accept-button';
  selected: number;
  analyticsData = [{
    amount: '$89,914',
    total: 'of $100,000 backed'
  },
  { amount: '5,007', total: 'total backers' },
  { amount: '56', total: 'days left' }];

  contentData = content;
  constructor(private modalService: ModalService) { }

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
}
