import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  showView: boolean = true;
  showCreate: boolean = false;
  
  switchTab() {
  }
}
