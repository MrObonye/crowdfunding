import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../modal/modal.service';
import { NgbModalComponent } from '../../modal/ngb-modal/ngb-modal.component';

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
  constructor(private modalService: ModalService, public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }
  select(value) {
    this.enableBorder.emit(value);

  }

  closeModal(id: string): void {
    this.modalService.close(id);
    this.activeModal.dismiss();
  }
  submit(){
    // this.activeModal.dismiss();
    this.modalService.open('custom-modal-1');


  }
}
