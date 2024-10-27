import { Component} from '@angular/core';
@Component({
  selector: 'app-home-slideshow',
  templateUrl: './home-slideshow.component.html',
  styleUrls: ['./home-slideshow.component.css']
})
export class HomeSlideshowComponent {

  callBackData = {
    name: '',
    phone: '',
    time: ''
  };

  onSubmit() {
    console.log('Call-Back Request:', this.callBackData);
    alert(`Thank you, ${this.callBackData.name}! We will call you at ${this.callBackData.phone} around ${this.callBackData.time}.`);
    this.callBackData = {
      name: '',
      phone: '',
      time: ''
    };
  }
}
