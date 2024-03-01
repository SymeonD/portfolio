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
      projects_slider_items[i].style.top = (i * 120) + "px";
      projects_slider_items[i].style.left = (i * 150) + "px";
    }

    // For the items not in the container rectangle, hide them
    for (let i = 0; i < projects_slider_items.length; i++) {
      var item_rect = projects_slider_items[i].getBoundingClientRect();
      if (item_rect.right > projects_slider_rect.right || item_rect.left < projects_slider_rect.left) {
        projects_slider_items[i].style.opacity = "0";
      }
    }

    // Make the elements draggable
    for (let i = 0; i < projects_slider_items.length; i++) {
      dragElement(projects_slider_items[i]);
    }
  }
}

function dragElement(elmnt: HTMLElement) {
  var pos1 = 0, pos3 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    elmnt.style.transition = "none";
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: any) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;

    let elmntNewPos = elmnt.offsetLeft - pos1;

    // Get the container element
    var container = elmnt.parentElement;
    // Get the offset position of the container
    var container_rect = container!.getBoundingClientRect();

    // If the new position is inside the container, move the element
    if (elmntNewPos >= container_rect.left && elmntNewPos + elmnt.offsetWidth <= container_rect.right) {
      elmnt.style.left = elmntNewPos + "px";
      console.log(elmnt.style.left);
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
