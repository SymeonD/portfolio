import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor() { }

  ngOnInit(): void {
    // Get the links
    const links = document.querySelectorAll('a.menu-item');

    // Add the click event
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = link.getAttribute('href')!;
        const target = document.querySelector(href)!;
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        document.getElementById("menu-list")!.classList.remove('menu-active');
        document.getElementById("top-container")!.style.top = "-80px";
      });
    });

    var prevScrollpos = window.scrollY;
    window.onscroll = () => {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("top-container")!.style.top = "0";
        // document.getElementById("top-container")!.style.height = "60px";
      } else {
        document.getElementById("top-container")!.style.top = "-80px";
        document.getElementById("menu-list")!.classList.remove('menu-active');
        // document.getElementById("top-container")!.style.height = "0px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

  toggleMenu() {
    // Get the menu list
    const menu = document.getElementById('menu-list')!;
    // Toggle the class
    menu.classList.toggle('menu-active');
  }
}
