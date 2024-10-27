import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSticky: boolean = false;
  menuActive: boolean = false;

  // Listen to window scroll events
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    this.isSticky = windowScroll > 50; // Set the threshold for sticky header activation
  }

  // Toggle the mobile menu
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
