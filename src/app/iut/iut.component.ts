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
        // Remove the focused class from all the IUT Containers
        if(!IUTContainer[i].classList.contains("focused")){
          for (let j = 0; j < IUTContainer.length; j++) {
            IUTContainer[j].classList.remove("focused");
          }
        }
      });

      // Add an event listener to the IUT Containers when it is clicked
      IUTContainer[i].addEventListener("click", function() {
        IUTContainer[i].classList.toggle("focused");
      });
    }
  }

}
