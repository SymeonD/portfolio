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
    if(CSS.supports("scroll-snap-type: start")) {
      console.log("snap-align is supported");
    }else{
      console.log("snap-align is not supported");
    }
  }

}
