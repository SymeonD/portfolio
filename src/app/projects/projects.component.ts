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

    // Projects elements
    // Get the project elements
    var projects_slider_items = document.getElementsByClassName("ProjectsSliderItem") as HTMLCollectionOf<HTMLElement>;

    // Add a transform to each element, the first 0% on x, then 20% per element
    for (let i = 0; i < projects_slider_items.length; i++) {
      projects_slider_items[i].style.transform = "translateX(" + (i * 20) + "%)";
    }
  }
}
