import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule, NgbModule, CommonModule]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  msgSent = 'Form submitted!';

  constructor(private toastService: ToastService) {}

  onSubmit() {
    console.log('Form Submitted:', this.formData);
    this.toastService.setMessage(this.msgSent);
  }
}
