import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalService } from '../../modal/modal.service';

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
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }
  select(value) {
    this.enableBorder.emit(value);

  }
  openModal(id: string): void {
    console.log('tset');

    this.modalService.close('custom-modal-1');
    this.modalService.open(id);
  }
  closeModal(id: string): void {
    this.modalService.close(id);
  }
  submit(){
    this.openModal('custom-modal-2');
  }
}
