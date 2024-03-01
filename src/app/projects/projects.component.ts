import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  ngOnInit(): void {

    // Get the slider container
    var projects_slider = document.getElementsByClassName("ProjectsSlider")[0] as HTMLElement;
    // Get the slider container geometry
    var projects_slider_rect = projects_slider.getBoundingClientRect();

    // Projects elements
    // Get the project elements
    var projects_slider_items = document.getElementsByClassName("ProjectsSliderItem") as HTMLCollectionOf<HTMLElement>;

    // Add a transform to each element, the first 0% on x, then 20% per element
    for (let i = 0; i < projects_slider_items.length; i++) {
      projects_slider_items[i].style.top = (i * 150) + "px";
      projects_slider_items[i].style.left = (i * 150) + "px";
    }

    // For the items not in the container rectangle, hide them
    for (let i = 0; i < projects_slider_items.length; i++) {
      var item_rect = projects_slider_items[i].getBoundingClientRect();
      if (item_rect.right > projects_slider_rect.right || item_rect.left < projects_slider_rect.left) {
        projects_slider_items[i].style.opacity = "0";
      }
    }

    // Make the elements container draggable
    var items_container = document.getElementById("Itemscontainer") as HTMLElement;
    dragElement(projects_slider, items_container);
  }
}

// Function to drag element diagonally
function dragElement(mouse_window: HTMLElement, elmnt: HTMLElement) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var projects_slider_items = document.getElementsByClassName("ProjectsSliderItem") as HTMLCollectionOf<HTMLElement>;
  mouse_window.onmousedown = dragMouseDown;

  function dragMouseDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.transition = "none";
    // Set the display to "" for the elements not in the container rectangle
    for (let i = 0; i < projects_slider_items.length; i++) {
      projects_slider_items[i].style.display = "";
    }
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: any) {
    e = e || window.event;
    e.preventDefault();
    // calculate the biggest difference between the x and y positions
    var xDiff = pos3 - e.clientX;
    var yDiff = pos4 - e.clientY;
    
    // if the x difference is bigger than the y difference, move the element diagonally
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      pos1 = xDiff;
      pos2 = xDiff;
    } else {
      pos1 = yDiff;
      pos2 = yDiff;
    }

    // calculate the new cursor position using the biggest difference
    // pos1 = pos3 - e.clientX;
    // pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    // Get the slider container
    var projects_slider = document.getElementsByClassName("ProjectsSlider")[0] as HTMLElement;
    // Get the slider container geometry
    var projects_slider_rect = projects_slider.getBoundingClientRect();

    // For the items not in the container rectangle, set the opacity to percentage of how much is visible
    for (let i = 0; i < projects_slider_items.length; i++) {
      var item_rect = projects_slider_items[i].getBoundingClientRect();
      if (item_rect.right > projects_slider_rect.right) {
        projects_slider_items[i].style.opacity = "" + (1 - Math.abs((item_rect.right - projects_slider_rect.right) / (item_rect.right - item_rect.left)));
      } else if (item_rect.left < projects_slider_rect.left){
        projects_slider_items[i].style.opacity = "" + (1 - Math.abs((item_rect.left - projects_slider_rect.left) / (item_rect.right - item_rect.left)));
      } else {
        projects_slider_items[i].style.opacity = "1";
      }
    }

    // If the element is dragged outside the window, set it back to the window
    if(elmnt.offsetLeft <= (450 - projects_slider_items.length * 150) || elmnt.offsetLeft >= 0) {
      closeDragElement();
    }
  }

  function closeDragElement() {
    console.log("closeDragElement");
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;

    // Get the passing position
    var passingPosition = Math.round((elmnt.offsetLeft / 150));

    console.log("passingPosition: " + passingPosition);

    // Set the new position
    elmnt.style.left = (passingPosition * 150) + "px";
    elmnt.style.top = (passingPosition * 150) + "px";

    // Get the project elements
    var projects_slider_items = document.getElementsByClassName("ProjectsSliderItem") as HTMLCollectionOf<HTMLElement>;

    // For the 2 elements after the passing position, set the opacity to 1
    // For the other elements, set the opacity to 0
    passingPosition = Math.abs(passingPosition);
    for (let i = 0; i < projects_slider_items.length; i++) {
      if (i >= passingPosition && i < passingPosition + 3) {
        projects_slider_items[i].style.opacity = "1";
      } else {
        projects_slider_items[i].style.opacity = "0";
        // Display none for the elements not in the container rectangle
        projects_slider_items[i].style.display = "none";
      }
    }
    elmnt.style.transition = "all .5s cubic-bezier(0.04, 0.46, 0.36, 0.99)";
  }
}
