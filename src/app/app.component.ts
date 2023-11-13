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
  dragItem : HTMLElement | null;
  container : HTMLElement | null;

  active : boolean;
  currentX : number | null;
  currentY : number | null;
  initialX : number | null;
  initialY : number | null;
  itemClick : HTMLElement | null;
  xOffset : number;
  yOffset : number;

  constructor() {
    this.active = false;
    this.currentX = null;
    this.currentY = null;
    this.initialX = null;
    this.initialY = null;
    this.itemClick = null;
    this.xOffset = 0;
    this.yOffset = 0;

    this.dragItem = document.getElementById("HSISN");
    this.container = document.getElementById("HSContainer");
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

    // this.container = document.getElementById("HSContainer");
    // this.dragItem = document.getElementById("HSISN");
    // this.container ? this.container.addEventListener("mousedown", (e) => {
    //   dragElement(e, "dragStart", this);
    // }, false) : null;
    // this.dragItem ? this.dragItem.addEventListener("mousedown", (e) => {
    //   dragElement(e, "itemDragStart", this);
    // }, false) : null;
    // this.container ? this.container.addEventListener("mousemove", (e) => {
    //   dragElement(e, "drag", this);
    // }, false) : null;
    // this.container ? this.container.addEventListener("mouseup", (e) => {
    //   dragElement(e, "dragEnd", this);
    // }, false) : null;

    dragElement(document.getElementById("HSISN")!);
  }
}

// function dragElement(elmnt: any, dragFunction: string, object: any) {
  

//   if(dragFunction === "dragStart") {
//     dragStart(elmnt);
//   }else if(dragFunction === "dragEnd") {
//     dragEnd(elmnt);
//   }else if(dragFunction === "drag") {
//     drag(elmnt);
//   }else if(dragFunction === "itemDragStart") {
//     itemDragStart(elmnt);
//   }

//   function dragStart(e: any) {
//     var elm = e.target;
//     var xPos = e.pageX - elm.offsetLeft;
    
//     if (e.type === "touchstart") {
//       var xPosMobile = e.touches[0].pageX - elm.offsetLeft;
//       object.initialX = xPosMobile;
//     } else {
//       object.initialX = xPos; 
//     }
    
//     object.dragItem ? object.dragItem.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)" : null;

//     if (e.target === object.dragItem) {
//       object.active = true;
//     }

//     console.log(object.dragItem);
//   }

//   function itemDragStart(e: any) {
//     var elm = e.target;
//     var xPos = e.pageX - elm.offsetLeft;
    
//     object.itemClick = xPos;
//   }


//   function dragEnd(e: any) {
//     let max = 400;

//     object.initialX = object.currentX;

//     object.active = false;
      
//     if (object.initialX > 100) {
//       object.currentX = max;
//       object.dragItem ? object.dragItem.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)" : null;
//       object.container ? object.container.classList.add('select-right') : null;
//       object.container ? object.container.classList.remove('select-left') : null;
//     } else {
//       object.currentX = 0;
//       object.dragItem ? object.dragItem.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)" : null;
//       object.container ? object.container.classList.remove('select-right') : null;
//       object.container ? object.container.classList.add('select-left') : null;
//     }
    
//     setTranslate(object.currentX, object.dragItem);
//   }

//   function drag(e: any) {
//     let max = 400;

//     let max_drag = 600;
//     let min_drag = 400;

//     var elm = e.target;
//     var xPos = e.pageX - elm.offsetLeft;

//     if (!(xPos > max_drag || xPos < min_drag)) {
//       if (object.active) {
//         e.preventDefault();

//         if (e.type === "touchmove") {
//           var xPosMobile = e.touches[0].pageX - elm.offsetLeft;
//           object.currentX = xPosMobile - object.initialX; 
//           if (object.initialX > max) {
//             object.currentX = xPosMobile - object.itemClick;
//           }
//           if (object.currentX > max) {
//             object.currentX = max;
//             object.active = false;
//             object.container ? object.container.classList.add('select-right') : null;
//             object.container ? object.container.classList.remove('select-left') : null;
//           } else if (object.currentX < min_drag) {
//             object.currentX = min_drag;
//             object.active = false;
//             object.container ? object.container.classList.remove('select-right') : null;
//             object.container ? object.container.classList.add('select-left') : null;
//           }
//         } else {
//           object.currentX = xPos - object.initialX;
//           if (object.initialX > max) {
//             object.currentX = xPos - object.itemClick;
//           }
//           if (object.currentX > max) {
//             object.currentX = max;
//             object.active = false;
//             object.container ? object.container.classList.add('select-right') : null;
//             object.container ? object.container.classList.remove('select-left') : null;
//           } else if (object.currentX < min_drag) {
//             object.currentX = min_drag;
//             object.active = false;
//             object.container ? object.container.classList.remove('select-right') : null;
//             object.container ? object.container.classList.add('select-left') : null;
//           }
//         }

//         object.dragItem ? object.dragItem.style.transition = "all .05s cubic-bezier(0.04, 0.46, 0.36, 0.99)" : null;

//         object.xOffset = object.currentX;

//         setTranslate(object.currentX, object.dragItem);
//       }
//     } else {
//       object.active = false;
      
//       if (object.initialX > max) {
//         object.dragItem ? object.dragItem.style.transform = "translate3d("+max+"px, 0px, 0)" : null;
//       } else {
//         object.dragItem ? object.dragItem.style.transform = "translate3d(0, 0px, 0)" : null; 
//       }
//     }
//   }

//   function setTranslate(xPos: number, el: any) {
//     el.style.transform = "translate3d(" + xPos + "px, 0px, 0)";
//   }
// }

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
    var elmntWidth = elmnt.getBoundingClientRect().width;

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
    var elmntWidth = elmnt.getBoundingClientRect().width;

    // Passing point
    var passingPoint = containerRect.left + (containerWidth / 2) - (elmntWidth / 2);

    // Set the element's new position:
    if (elmnt.offsetLeft > passingPoint) {
      elmnt.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)";
      elmnt.style.left = containerRect.left + containerWidth - elmntWidth + "px";
    } else {
      elmnt.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)";
      elmnt.style.left = containerRect.left + "px";
    }
  }
}