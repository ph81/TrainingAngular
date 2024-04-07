import { Component, OnDestroy, OnInit, TemplateRef, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnDestroy {
  displayMessage: string = '';
  private subscription: Subscription;

  constructor(private toastService: ToastService) {
    this.subscription = this.toastService.message$.subscribe((message) => {
      this.displayMessage = message;
    });
  }

  clearMessage() {
    this.toastService.resetMessage();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
