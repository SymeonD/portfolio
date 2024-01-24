import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  container : HTMLElement | null;

  active : boolean;
  currentX : number | null;
  currentY : number | null;
  initialX : number | null;
  initialY : number | null;
  itemClick : HTMLElement | null;
  xOffset : number;
  yOffset : number;
  typewriterWords: string[] | null;

  constructor() {
    this.active = false;
    this.currentX = null;
    this.currentY = null;
    this.initialX = null;
    this.initialY = null;
    this.itemClick = null;
    this.xOffset = 0;
    this.yOffset = 0;

    this.typewriterWords = ["WEBSITE", "SERVER", "MOBILE APPLICATION", "DESKTOP APPLICATION", "GAME"];

    this.container = document.getElementById("HSContainer");
  }

  // TypeWriter
  typeWriter(word: string, i: number, text: string) {
    if (i < word.length) {
      text += word.charAt(i);
      document.getElementById("Typewriter")!.innerHTML = text;
      i++;
      setTimeout(() => this.typeWriter(word, i, text), 100);
    }else{
      setTimeout(() => this.typeWriterBack(word, i, text), 1000);
    }
  }

  typeWriterBack(word: string, i: number, text: string) {
    if (i > 0) {
      text = text.slice(0, -1);
      document.getElementById("Typewriter")!.innerHTML = text;
      i--;
      setTimeout(() => this.typeWriterBack(word, i, text), 50);
    }else{
      // Change the word
      let index = this.typewriterWords!.indexOf(word);
      index = (index + 1) % this.typewriterWords!.length;
      word = this.typewriterWords![index];
      setTimeout(() => this.typeWriter(word, i, text), 1000);
    }
  }

  // Loop through the words
  typeWriterLoop() {
    let i = 0;
    let text = "";
    let word = this.typewriterWords![i];
    this.typeWriter(word, 0, text);
  }

  ngOnInit(): void {
    let resumeSection = document.getElementById("Resume");
    let resumeImage = document.getElementById("ResumeImage");
    let resumerClickable = document.getElementById("ResumeClickable");
    resumeSection?.addEventListener("click", function() {
      resumeImage?.classList.toggle("expand");
      resumeSection?.classList.toggle("expand");
      resumerClickable?.classList.toggle("expand");
    });
    resumerClickable?.addEventListener("click", function() {
      resumerClickable?.classList.contains("expand") ? null : null;
    });

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

    // Use the typewriter
    this.typeWriterLoop();
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