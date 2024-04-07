import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtotalPipe } from 'src/app/pipes/subtotal.pipe';

@NgModule({
  declarations: [SubtotalPipe],
  imports: [CommonModule],
  exports: [SubtotalPipe]
})
export class SharedModule {}
