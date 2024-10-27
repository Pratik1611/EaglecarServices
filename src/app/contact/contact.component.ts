import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  callBackData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
 
  onSubmit() {
    console.log('Call-Back Request:', this.callBackData);
    alert(`Thank you, ${this.callBackData.name}! Your email address is ${this.callBackData.email} your subject is ${this.callBackData.subject} Your Message ${this.callBackData.message}.`);
    this.callBackData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
