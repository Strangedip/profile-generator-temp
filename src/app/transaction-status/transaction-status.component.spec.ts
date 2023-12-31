import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionStatusComponent } from './transaction-status.component';

describe('TransactionStatusComponent', () => {
  let component: TransactionStatusComponent;
  let fixture: ComponentFixture<TransactionStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionStatusComponent]
    });
    fixture = TestBed.createComponent(TransactionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
