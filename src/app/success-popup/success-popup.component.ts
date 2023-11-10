import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.css'],
})
export class SuccessPopupComponent {
  @Input() message: string = '';
  @Output() closed = new EventEmitter<void>();

  ngOnInit() {
    setTimeout(() => {
      this.closePopup();
    }, 3000);
  }

  closePopup() {
    this.closed.emit();
  }
}