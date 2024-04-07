import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastMessage = new Subject<string>();
  private timer: ReturnType<typeof setTimeout> = setTimeout(() => {}, 0);
  message$ = this.toastMessage.asObservable();

  setMessage(msg: string) {
    clearTimeout(this.timer);
    this.toastMessage.next(msg);
    this.timer = setTimeout(() => {
      this.resetMessage();
    }, 5000);
  }

  resetMessage() {
    clearTimeout(this.timer);
    this.toastMessage.next('');
  }
}