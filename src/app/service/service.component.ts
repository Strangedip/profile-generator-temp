import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  profileList: Profile[] = [
    new Profile('Ayush', ['python', 'javascript', 'java']),
    new Profile('Sandip', ['python', 'javascript']),
    new Profile('Strange', ['python', 'javascript']),
    new Profile('Strangedip', ['python', 'javascript', 'flask', 'java'])
  ];

  addProfile(profile: Profile) {
    this.profileList.push(profile);
  }
}

export class Profile {
  name: String;
  skills: String[];

  constructor(name: String, skills: String[]) {
    this.name = name;
    this.skills = skills;
  }
}



