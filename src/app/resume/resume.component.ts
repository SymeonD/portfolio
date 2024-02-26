import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  ngOnInit() {
    let resumeSection = document.getElementById("Resume");
    let resumeImage = document.getElementById("ResumeImage");
    let resumerClickable = document.getElementById("ResumeClickable");
    let resumelightbox = document.getElementById("ResumeLightbox");
    resumeSection?.addEventListener("click", function() {
      resumeImage?.classList.toggle("expand");
      resumeSection?.classList.toggle("expand");
      resumerClickable?.classList.toggle("expand");
    });
    resumerClickable?.addEventListener("click", function() {
      resumerClickable?.classList.contains("expand") ? null : null;
    });
    resumelightbox?.addEventListener("click", function() {
      Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });
    });
  }

}
