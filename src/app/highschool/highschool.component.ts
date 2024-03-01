import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-highschool',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highschool.component.html',
  styleUrl: './highschool.component.css'
})
export class HighschoolComponent {

  ngOnInit(): void {
    dragElement(document.getElementById("HSISN")!);
    dragElement(document.getElementById("HSKart")!);
    dragElement(document.getElementById("HSMinecraft")!);
  }

  // On page resize
  onResize(event: any) {
    // Get the HSContainers
    var containers = document.getElementsByClassName("HSContainer");
    for(var i = 0; i < containers.length; i++) {
      // Get the element
      var element = containers[i].children[0] as HTMLElement;
      // Set the left position of the element to ""
      element.style.left = "";
      // Set the right position of the element to "0px"
      element.style.right = "0px";
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
    var containerRect = container!.getBoundingClientRect();
    // Get the width of the container
    var containerWidth = containerRect.width;
    // Get the width of the element
    var elmntWidth = elmnt.children[0].getBoundingClientRect().width;

    if(elmntNewPos < 0 || elmntNewPos > (containerWidth-elmntWidth)) {
      closeDragElement();
    }else{
      elmnt.style.left = (elmntNewPos) + "px";
    }

    // Change the style of the text element to remove the hidden class
    if (elmntNewPos > (containerWidth / 2) - (elmntWidth / 2)) {
      // Get the text element
      var text = elmnt.getElementsByClassName("HSText")[0] as HTMLElement;
      // Change the style of the text element to remove the hidden class
      text.hidden = true;
    } else {
      // Get the text element
      var text = elmnt.getElementsByClassName("HSText")[0] as HTMLElement;
      // Change the style of the text element to remove the hidden class
      text.hidden = false;
    }

    // Change the opacity of the text depending on the position of the element
    // When the element is at the left side of the container, the opacity is 1
    // When the element is at the middle of the container, the opacity is 0
    // When the element is at the right side of the container, the opacity is 0
    var opacity = Math.abs((elmntNewPos - ((containerWidth / 2) - (elmntWidth / 2))) / (containerWidth / 2 - elmntWidth / 2));
    var text = elmnt.getElementsByClassName("HSText")[0] as HTMLElement;
    text.style.opacity = opacity.toString();
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;

    // Get the container element
    var container = elmnt.parentElement;
    // Get the offset position of the container
    var containerRect = container!.getBoundingClientRect();
    // Get the width of the container
    var containerWidth = containerRect.width;
    // Get the width of the element
    var elmntWidth = elmnt.children[0].getBoundingClientRect().width;

    // Passing point
    var passingPoint = (containerWidth / 2) - (elmntWidth / 2);

    // Set the element's new position:
    if (elmnt.offsetLeft > passingPoint) {
      elmnt.style.left = (containerWidth - elmntWidth) + "px";

      // Toggle the classlist shown to the element
      elmnt.classList.remove("shown");
    } else {
      elmnt.style.left = "0px";

      // Toggle the classlist shown to the element
      elmnt.classList.add("shown");

      // Get the text element
      var text = elmnt.getElementsByClassName("HSText")[0] as HTMLElement;
      // Set the opacity of the text element to 1
      text.style.opacity = "1";
    }
    elmnt.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)";
  }
}