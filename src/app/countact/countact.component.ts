import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countact.component.html',
  styleUrl: './countact.component.css'
})
export class CountactComponent {

  ngOnInit(): void {
    // Get both parts of the countact logo
    var countactLogoLeft = document.getElementById("CountactLeftSlider") as HTMLElement;
    var countactLogoRight = document.getElementById("CountactRightSlider") as HTMLElement;

    // Get both texts of the countact logo
    var countactTextLeft = document.getElementById("CountactLeftText") as HTMLElement;
    var countactTextRight = document.getElementById("CountactRightText") as HTMLElement;
  
    // Add event listeners to clicks
    countactLogoLeft.addEventListener("click", function() {
      if (!countactLogoLeft.classList.contains("hiding")) {
        countactLogoLeft.classList.toggle("shown");
        countactTextLeft.classList.toggle("hiding");
        countactLogoRight.classList.toggle("hiding");
      }
    });
    countactLogoRight.addEventListener("click", function() {
      if (!countactLogoRight.classList.contains("hiding")) {
        countactLogoLeft.classList.toggle("hiding");
        countactLogoRight.classList.toggle("shown");
        countactTextRight.classList.toggle("hiding");
      }
    });
  }
}
