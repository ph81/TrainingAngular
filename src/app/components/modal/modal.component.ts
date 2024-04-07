import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/services/utils';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() cartItems: Item[] = [];;
  @Input() totals: number = 0;

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();
  }

  confirmPurchase() {
    // Implement your purchase confirmation logic here
    // For now, let's just close the modal
    this.activeModal.close('Confirmed');
  }
}
