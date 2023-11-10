import { Component, NgModule } from '@angular/core';
import { Profile, ServiceComponent } from '../service/service.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  profileList: Profile[];
  service: ServiceComponent;

  allSkills = ['Python', 'Java', 'Javascript', 'C++', 'Web-Tech']

  name: String = '';
  skills: String[] = [];
  nameError: string = '';
  skillsError: string = '';

  constructor(service: ServiceComponent) {
    this.service = service;
    this.profileList = service.profileList;
  }

  onCheckboxChange(value: string) {
    if (this.skills.includes(value)) {
      this.skills = this.skills.filter(skill => skill !== value);
    } else {
      this.skills.push(value);
    }
  }

  onSubmit(form: NgForm) {
    if (!this.name.trim()) {
      this.nameError = 'Name is required.';
      return;
    }
    if (this.skills.length === 0) {
      this.skillsError = 'At least one skill is required.';
      return;
    }

    this.nameError = '';
    this.skillsError = '';

    this.addProfile(this.name, this.skills);
    console.log('Form submitted', form.value);
  }

  addProfile(name: String, skills: String[]) {
    this.service.addProfile(new Profile(name, skills));
  }
}


