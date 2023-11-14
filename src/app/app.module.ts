
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { TransactionStatusComponent } from './transaction-status/transaction-status.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ProfileComponent,
    ServiceComponent,
    SuccessPopupComponent,
    TransactionStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [ServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
