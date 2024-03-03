import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transition.component.html',
  styleUrl: './transition.component.css'
})
export class TransitionComponent {

  ngOnInit():void {
    // Parallax effect
    // Get the three images
    var TI1 = document.getElementById("TI1") as HTMLElement;
    var TI2 = document.getElementById("TI2") as HTMLElement;
    var TI3 = document.getElementById("TI3") as HTMLElement;
    // Event listener for the scroll event
    // TODO: Change the scroll comparator based on the length of the page
    window.addEventListener("scroll", function() {

      console.log(window.scrollY);

      // If window size more than 900px, then do the parallax effect
      if (window.innerHeight > 900) {
        // Get the scroll position
        var scroll = window.scrollY;
        // Set the transform to the images
        TI1.style.transform = "translateX(" + (scroll<1445 ? (scroll / 3 - 450) : 31.6) + "%) translateY(-60%)";
        // Rise opacity of the image from 0% when scroll is 500 to 100% whe nthe scroll gets to 1445
        TI2.style.transform = "translateY(" + (scroll>1120 ? (scroll<1445 ? (scroll / 2 - 722) : 0) : -161.5) + "%) translateX(-" + (scroll / 700) + "%)";
        TI3.style.transform = "translateY(" + (scroll<1445 ? (-scroll / 4 + 410) : 50) + "%) translateX(-40%)"; 
        TI1.style.opacity = scroll/6 - 140 + "%";
        TI2.style.opacity = scroll/6 - 140 + "%";
        TI3.style.opacity = scroll/6 - 140 + "%";
      }else{
        // Get the scroll position
        var scroll = window.scrollY;
        // Set the transform to the images
        // TI1.style.transform = "translateX(" + (scroll<900 ? (scroll / 3 - 300) : 31.6) + "%) translateY(-60%)"; /* 32% -60% */
        // // Rise opacity of the image from 0% when scroll is 500 to 100% whe nthe scroll gets to 1445
        // TI2.style.transform = "translateY(" + (scroll>500 ? (scroll<900 ? (scroll / 2 - 500) : 0) : -161.5) + "%) translateX(-" + (scroll / 450) + "%)"; /* -2% 0% */
        // TI3.style.transform = "translateY(" + (scroll<900 ? (-scroll / 4 + 280) : 50) + "%) translateX(-40%)"; /* -40% 50% */
        TI1.style.opacity = scroll/4 - 140 + "%";
        TI2.style.opacity = scroll/4 - 140 + "%";
        TI3.style.opacity = scroll/4 - 140 + "%";
      }
    });
  }
}
