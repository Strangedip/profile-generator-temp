import { Component } from '@angular/core';

class Profile {
  static profileList: Profile[] = [
    new Profile('Ayush', ['python', 'javascript', 'java']),
    new Profile('Sandip', ['python', 'javascript']),
    new Profile('Strangedip', ['python', 'javascript','flask','java'])
  ];
  name:String;
  skills:String[];
  constructor(name: String, skills: String[]) {
    this.name=name;
    this.skills=skills;
  }

}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profiles = Profile.profileList;
}
