import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
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
      });
    });

    var prevScrollpos = window.scrollY;
    window.onscroll = () => {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("Menu-container")!.style.top = "0";
      } else {
        document.getElementById("Menu-container")!.style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

}
