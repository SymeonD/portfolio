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


function dragProjectElement(elmnt: HTMLElement) {
  console.log("Drag project element");
  console.log(elmnt);
  var pos1 = 0, pos3 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    elmnt.style.transition = "none";
    // document.onmouseup = closeDragElement;
    // // call a function whenever the cursor moves:
    // document.onmousemove = elementDrag;
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

    // Get the 

    let elmntNewPos = elmnt.offsetLeft - pos1;

    // Get the container element
    var container = elmnt.parentElement;
    // Get the offset position of the container
    var containerRect = container!.getBoundingClientRect();
    // Get the width of the container
    var containerWidth = containerRect.width;
    // Get the width of the element
    // If the element has the text shown, substract the width of the text
    if (elmnt.classList.contains("shown")) {
      var text = elmnt.getElementsByClassName("HSText")[0] as HTMLElement;
      var elmntWidth = elmnt.getBoundingClientRect().width - text.getBoundingClientRect().width;
    }else{
      var elmntWidth = elmnt.getBoundingClientRect().width;
    }

    if(elmntNewPos < containerRect.left || elmntNewPos > containerRect.left + containerWidth - elmntWidth) {
      closeDragElement();
    }else{
      elmnt.style.left = (elmntNewPos) + "px";
    }
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
    if (elmnt.classList.contains("shown")) {
      var text = elmnt.getElementsByClassName("HSText")[0] as HTMLElement;
      var elmntWidth = elmnt.getBoundingClientRect().width - text.getBoundingClientRect().width;
    }else{
      var elmntWidth = elmnt.getBoundingClientRect().width;
    }

    // Passing point
    var passingPoint = containerRect.left + (containerWidth / 2) - (elmntWidth / 2);

    // Set the element's new position:
    if (elmnt.offsetLeft > passingPoint) {
      elmnt.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)";
      elmnt.style.left = containerRect.left + containerWidth - elmntWidth + "px";

      // Toggle the classlist shown to the element
      elmnt.classList.remove("shown");
    } else {
      elmnt.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)";
      elmnt.style.left = containerRect.left + "px";

      // Toggle the classlist shown to the element
      elmnt.classList.add("shown");
    }

    // After the new position is done, show the text if the element is shown
    if (elmnt.classList.contains("shown")) {
      
      // Get the text element
      var text = elmnt.getElementsByClassName("HSText")[0] as HTMLElement;
      // Change the style of the text element to remove the hidden class
      text.hidden = false;

    }else{
      // Get the text element
      var text = elmnt.getElementsByClassName("HSText")[0] as HTMLElement;
      // Change the style of the text element to remove the hidden class
      text.hidden = true;
    }
  }
}