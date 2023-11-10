import { Component } from '@angular/core';
import { ServiceComponent, Profile } from '../service/service.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileList: Profile[];
  service: ServiceComponent;
  constructor(service: ServiceComponent) {
    this.service = service;
    this.profileList = service.profileList;
  }
}
