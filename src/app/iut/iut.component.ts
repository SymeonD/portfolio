import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iut.component.html',
  styleUrl: './iut.component.css'
})
export class IutComponent {

  ngOnInit(): void {
    // Get the IUT Containers
    var IUTContainer = document.getElementsByClassName("IUTSlider") as HTMLCollectionOf<HTMLElement>;
    // Get the IUT Text
    var IUTText = document.getElementsByClassName("IUTText") as HTMLCollectionOf<HTMLElement>;
    // Add an event listener to the IUT Containers when the mouse is over
    // Change the opacity of the text to 1
    for (let i = 0; i < IUTContainer.length; i++) {
      IUTContainer[i].addEventListener("mouseover", function() {
        IUTText[i].style.opacity = "1";
        // Set font size to 1.5rem
        IUTText[i].style.fontSize = "1em";
      });
      IUTContainer[i].addEventListener("mouseout", function() {
        IUTText[i].style.opacity = "0";
        // Set font size to 0rem
        IUTText[i].style.fontSize = "0em";
      });
    }
  }

}
