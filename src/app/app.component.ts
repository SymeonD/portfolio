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
  }
}