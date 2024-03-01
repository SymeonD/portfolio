import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { ResumeComponent } from './resume/resume.component';
import { TransitionComponent } from './transition/transition.component';
import { HighschoolComponent } from './highschool/highschool.component';
import { IutComponent } from './iut/iut.component';
import { CountactComponent } from './countact/countact.component';
import { ScuComponent } from './scu/scu.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkwithmeComponent } from './workwithme/workwithme.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, FooterComponent, HeroComponent, ResumeComponent, TransitionComponent, HighschoolComponent, IutComponent, CountactComponent, ScuComponent, ProjectsComponent, WorkwithmeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(): void {
    // Get all the elements
    var app_root = document.getElementsByTagName("app-root")[0] as HTMLElement;
    console.log(app_root);

    // Get all the app root children
    var app_root_children: Element[] = Array.from(app_root.children);
    // Remove the two first children and the last one, from the array
    app_root_children = Array.from(app_root_children).slice(2, app_root_children.length - 1);
    console.log(app_root_children);

    // Get the y position of the middle of each element
    var middle_positions: number[] = [];
    for (let i = 0; i < app_root_children.length; i++) {
      var rect = app_root_children[i].getBoundingClientRect();
      middle_positions.push(((window.scrollY + rect.top + 227) + (window.scrollY + rect.bottom + 227)) / 2); //TODO: 113.5 is the height of the menu
      // console.log(rect.top + window.scrollY + rect.height / 2);
      console.log(window.scrollY +rect.top + 227);
      console.log(window.scrollY +rect.bottom + 227);
    }
    // Remove 113.5 from the first element
    middle_positions[0] -= 113.5; //TODO: 113.5 is the height of the menu
    console.log(middle_positions);

    // Draw a line at the middle positions
    var lines = document.createElement("div");
    for (let i = 0; i < middle_positions.length; i++) {
      var line = document.createElement("div");
      line.style.position = "absolute";
      line.style.left = "0";
      line.style.top = middle_positions[i] + "px";
      line.style.width = "100%";
      line.style.height = "1px";
      line.style.backgroundColor = "red";
      lines.appendChild(line);
    }


    // Add event listener to the scroll stop event
    var scroll_timer: any;
    window.addEventListener('scroll', function () {
      clearTimeout(scroll_timer);
      scroll_timer = setTimeout(function () {
        console.log(window.scrollY)

        // If not at the top of the page, or bottom of the page, return
        if (window.scrollY < window.innerHeight/1.5 || window.scrollY + innerHeight > document.body.clientHeight - innerHeight/4) {
          return;
        }
        
        // Get the y position of the middle of the window
        var window_middle = window.scrollY + innerHeight / 2;
        
        // Get the nearest middle position
        var nearest_middle_position = middle_positions.reduce(function (prev, curr) {
          return (Math.abs(curr - window_middle) < Math.abs(prev - window_middle) ? curr : prev);
        });

        // Scroll to the nearest middle position
        window.scrollTo({ top: nearest_middle_position - innerHeight / 2, behavior: 'smooth' });
        // console.log(nearest_middle_position - innerHeight / 2);

      }, 50);
    });
  }
}
